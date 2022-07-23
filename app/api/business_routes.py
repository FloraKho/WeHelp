from flask import Blueprint, request
from app.forms import CreateBusinessForm
from app.models import db, Business, Business_Image
from flask_login import login_required


business_routes = Blueprint('businesses', __name__)
#-------------------------BUSINESS VALIDATIONS------------------
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#-------------------------GET ALL BUSINESS----------------------
@business_routes.route('',methods=["GET"])
def get_all_business():
    # businesses = Business.query.options(joinedload('business_images')).all()
    businesses = Business.query.all()
    return {'Business': [business.to_dict() for business in businesses]}

#-------------------------GET ONE BUSINESS----------------------
@business_routes.route('/<int:id>')
def get_one_business (id):
    one_business = Business.query.get(id)
    return one_business.to_dict()

#-------------------------POST ONE BUSINESS---------------------

@business_routes.route('', methods=["POST"])
# @login_required
def post_one_business():
    form = CreateBusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_business = Business(
            user_id=form.data['user_id'], 
            name=form.data['name'], 
            description=form.data['description'], 
            category_id=form.data['category_id'], 
            address=form.data['address'], 
            city=form.data['city'], 
            state=form.data['state'], 
            zip_code=form.data['zip_code'], 
            phone=form.data['phone'], 
            website=form.data['website'],
            price_range=form.data['price_range'],
            business_hours=form.data['business_hours'],
            latitude=form.data['latitude'],
            longitude=form.data['longitude']
        )
        db.session.add(new_business)
        db.session.commit()
        return new_business.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#-------------------------UPDATE ONE BUSINESS-------------------

#-------------------------DELETE ONE BUSINESS-------------------
@business_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def delete_business(id):
    business = Business.query.get(id)
    db.session.delete(business)
    db.session.commit()
    return {'Successfully delete': 'Successfully delete'}
