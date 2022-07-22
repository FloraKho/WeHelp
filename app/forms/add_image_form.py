from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class AddReviewForm(FlaskForm):
    business_id = IntegerField("business_id", validators=[DataRequired()])
    image_url = StringField("image_url", validators=[DataRequired()])
