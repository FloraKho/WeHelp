from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review
from app.forms import AddReviewForm, UpdateReviewForm
import datetime


review_routes = Blueprint("reviews", __name__)

#-------------------------REVIEW VALIDATIONS------------------

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#-------------------------GET ALL REVIEWS FOR ONE BUSINESS----------------------

@review_routes.route("/biz/<int:id>")
def get_biz_reviews(id):
    reviews = Review.query.filter(Review.business_id == id).all()
    return { "Reviews": [review.to_dict() for review in reviews] }

#-------------------------ADD ONE REVIEW---------------------

@review_routes.route("", methods=["POST"])
# @login_required
def add_review():
    form = AddReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=form.data["user_id"],
            business_id=form.data["business_id"],
            rating=form.data["rating"],
            content=form.data["content"],
            created_at=datetime.datetime.now()
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
#-------------------------GET ONE REVIEW----------------------
@review_routes.route('/<int:id>', methods=['GET'])
def get_one_review(id):
    reviews = Review.query.filter(Review.id == id).all()
    return { "Reviews": [review.to_dict() for review in reviews] }

#-------------------------UPDATE ONE REVIEW-------------------
@review_routes.route('/<int:id>', methods=["PUT"])
# @login_required
def update_one_review(id):
    form = UpdateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        curr_review = Review.query.get(id)
        curr_review.user_id=form.data['user_id'],
        curr_review.business_id=form.data['business_id'],
        curr_review.rating=form.data['rating'],
        curr_review.content=form.data['content'],

        db.session.commit()
        print(form.data)
        return curr_review.to_dict()
    return {'errors': "ERROR!!!!!!!"}, 401

#-------------------------DELETE ONE REVIEW-------------------
@review_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {"message": "Sucessfully Deleted."}

#-----------------------GET ALL REVIEWS-----------------------
@review_routes.route("/all")
def get_all_reviews():
    reviews = Review.query.all()
    return { "Reviews": [review.to_dict() for review in reviews] }


