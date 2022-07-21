from .db import db 

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey="users.id", nullable=False)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.Integer, ForeignKey="categories.id", nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zipCode = db.Column(db.String(10), nullable=False)
    phone = db.Column(db.String(10), nullable=False)
    website = db.Column(db.String(255))
    price_range = db.Column(db.String(10), nullable=False)
    business_hours = db.Column(db.String(50), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

    user = db.relationship('User', back_populates='businesses')
    category = db.relationship('Category', back_populates='categories')
    business_images = db.relationship('Business_image', back_populates='business_images')
    