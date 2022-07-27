from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField

class EditProfileForm(FlaskForm):
    profile_pic = TextAreaField("profile_pic")