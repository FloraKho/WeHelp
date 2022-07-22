from flask import Blueprint
from flask_login import login_required
from app.models import db, Business_Image
from app.forms import AddImageForm

business_image_routes=Blueprint("business_image", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@business_image_routes.route("/")
def get_all_image():
    images = Business_Image.query.all()
    return { "Business_Images": [image.to_dict() for image in images]}


@business_image_routes.route("/", methods=["POST"])
@login_required
def add_business_image():
    form = AddImageForm()

    if form.validate_on_submit():
        image = Business_Image (
            business_id=form.data["business_id"],
            image_url=form.data["image_url"]
        )
        db.session.add(image)
        db.session.commit()
        return image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    

@business_image_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_business_image(id):
    image = Business_Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return {"image": image.to_dict()}