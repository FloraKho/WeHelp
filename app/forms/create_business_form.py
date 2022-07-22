from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField,SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Category

# categories = Category.query.all()
# print("THIS IS CATEGORIES", categories)

class CreateBusinessForm(FlaskForm):
        user_id = IntegerField('User', validator=[DataRequired]), 
        name = StringField('Name', validator=[DataRequired]), 
        description = StringField('Description', validator=[DataRequired]), 
        category_id = StringField('Category', validator=[DataRequired]), 
        address = StringField('Address', validator=[DataRequired]), 
        city = StringField('City', validator=[DataRequired]), 
        state = StringField('State', validator=[DataRequired]), 
        zip_code = IntegerField('Zipcode', validator=[DataRequired]), 
        phone = StringField('Phone', validator=[DataRequired]), 
        website = StringField('Website'),
        price_range = StringField('Price', validator=[DataRequired]),
        business_hours = StringField('Business Hours', validator=[DataRequired]),
        latitude = FloatField('Latitude', validator=[DataRequired]),
        longitude = FloatField('Longitude', validator=[DataRequired]),
        submit = SubmitField('Create Business')