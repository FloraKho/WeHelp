from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review
from app.forms import addReviewForm
import datetime


review_routes = Blueprint("review", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@review_routes.route("/")
def get_all_reviews():
    reviews = Review.query.all()
    return { "Review": [review.to_dict() for review in reviews] }

# @review_routes.route("/<int:id>")
# def get_one_reviews(id):
#     one_review = Review.query.get(id)
#     return one_review.to_dict()

@review_routes.route("/", methods=["POST"])
@login_required
def add_review():
    # add a form
    form = addReviewForm()

    # form['csrf_token'].data = request.cookies['csrf_token']
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
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {"review": review.to_dict()}
