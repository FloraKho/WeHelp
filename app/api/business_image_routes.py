from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Business_Image
from app.forms import AddImageForm
from app.awsS3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


business_image_routes=Blueprint("business_images", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@business_image_routes.route("/all")
def get_all_images():
    images = Business_Image.query.all()
    return {"Business_Images": [image.to_dict() for image in images]}

@business_image_routes.route("/biz/<int:id>")
def get_biz_images(id):
    images = Business_Image.query.filter(Business_Image.business_id == id).all()
    return { "Business_Images": [image.to_dict() for image in images]}


# @business_image_routes.route("", methods=["POST"])
# # @login_required
# def add_business_image():
#     form = AddImageForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         image = Business_Image (
#             business_id=form.data["business_id"],
#             image_url=form.data["image_url"]
#         )
#         db.session.add(image)
#         db.session.commit()
#         return image.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@business_image_routes.route("", methods=["POST"])
def upload_image(id):

    if "image" not in request.files:
        return { "errors": "image required" }, 400
    image = request.files["image"]

    if not allowed_file(image.filename):
        return { "errors": "file type not permitted" }, 400
        
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400
        
    url = upload["url"]

    new_image = Business_Image(
        business_id=id,
        image_url=url
    )
    db.session.add(new_image)
    db.session.commit()

    return {"Business_Image": new_image.to_dict()}

        


@business_image_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_business_image(id):
    image = Business_Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return {"msg": "good"}