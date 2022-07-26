from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

class AddImageForm(FlaskForm):
    business_id = IntegerField("business_id", validators=[DataRequired()])
    image_url = TextAreaField("image_url", validators=[DataRequired()])
