from flask import Blueprint
from app.models.category import Category

category_routes=Blueprint("category", __name__)

@category_routes.route("/")
def get_all_categories():
    categories = Category.query.all()
    return { "Categories": [category.to_dict() for category in categories] }
