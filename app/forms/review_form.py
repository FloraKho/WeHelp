from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextField
from wtforms.validators import DataRequired

class AddReviewForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    business_id = IntegerField("business_id", validators=[DataRequired()])
    rating = StringField("rating", validators=[DataRequired()])
    content = TextField("content", validators=[DataRequired()])
    

class UpdateReviewForm(FlaskForm):
    id = IntegerField("id")
    user_id = IntegerField("user_id", validators=[DataRequired()])
    business_id = IntegerField("business_id", validators=[DataRequired()])
    rating = StringField("rating", validators=[DataRequired()])
    content = TextField("content", validators=[DataRequired()])
    
