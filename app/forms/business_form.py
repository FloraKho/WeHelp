from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField,SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Category


class CreateBusinessForm(FlaskForm):
        user_id = IntegerField('User', validators=[DataRequired()])
        name = StringField('Name', validators=[DataRequired()])
        description = StringField('Description', validators=[DataRequired()])
        category_id = StringField('Category', validators=[DataRequired()])
        address = StringField('Address', validators=[DataRequired()])
        city = StringField('City', validators=[DataRequired()]) 
        state = StringField('State', validators=[DataRequired()]) 
        zip_code = IntegerField('Zipcode', validators=[DataRequired()])
        phone = StringField('Phone', validators=[DataRequired()])
        website = StringField('Website')
        price_range = StringField('Price', validators=[DataRequired()])
        business_hours = StringField('Business Hours', validators=[DataRequired()])
        latitude = FloatField('Latitude', validators=[DataRequired()])
        longitude = FloatField('Longitude', validators=[DataRequired()])


class UpdateBusinessForm(FlaskForm):
        id = IntegerField('id')
        user_id = IntegerField('User', validators=[DataRequired()])
        name = StringField('Name', validators=[DataRequired()])
        description = StringField('Description', validators=[DataRequired()])
        category_id = StringField('Category', validators=[DataRequired()])
        address = StringField('Address', validators=[DataRequired()])
        city = StringField('City', validators=[DataRequired()]) 
        state = StringField('State', validators=[DataRequired()]) 
        zip_code = IntegerField('Zipcode', validators=[DataRequired()])
        phone = StringField('Phone', validators=[DataRequired()])
        website = StringField('Website')
        price_range = StringField('Price', validators=[DataRequired()])
        business_hours = StringField('Business Hours', validators=[DataRequired()])
        latitude = FloatField('Latitude', validators=[DataRequired()])
        longitude = FloatField('Longitude', validators=[DataRequired()])