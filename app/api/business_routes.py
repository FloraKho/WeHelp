from flask import Blueprint
from app.models import Business



business_routes = Blueprint('businesses', __name__)
#-------------------------BUSINESS VALIDATIONS------------------

#-------------------------GET ALL BUSINESS----------------------
@business_routes.route('/')
def get_all_business():
    #businesses = Business.query.options(joinedload('business_images')).all()
    businesses = Business.query.all()
    return {'Business': [business.to_dict() for business in businesses]}

#-------------------------GET ONE BUSINESS----------------------
@business_routes.route('/<int:id>')
def get_one_business (id):
    one_business = Business.query.get(id)
    return one_business.to_dict()
#-------------------------POST ONE BUSINESS---------------------
# @business_routes.route('/', methods=["POST"])
# def post_one_business():


#-------------------------UPDATE ONE BUSINESS-------------------
#-------------------------DELETE ONE BUSINESS-------------------