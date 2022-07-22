from .db import db 

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zip_code = db.Column(db.String(10), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    website = db.Column(db.String(255))
    price_range = db.Column(db.String(10), nullable=False)
    business_hours = db.Column(db.String(50), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

    user = db.relationship('User', back_populates='businesses')
    business_images = db.relationship('Business_Image', back_populates='business', cascade="all, delete-orphan")
    category = db.relationship('Category', back_populates='business')
    reviews = db.relationship('Review', back_populates='business', cascade="all, delete-orphan")

    def to_dict(self):
        return {
                'id': self.id,
                'user_id': self.user_id,
                'name': self.name,
                'description': self.description,
                'category_id': self.category_id,
                'address': self.address,
                'city': self.city,
                'state': self.state,
                'zip_code': self.zip_code,
                'phone': self.phone,
                'website': self.website,
                'price_range': self.price_range,
                'business_hours': self.business_hours,
                'latitude': self.latitude,
                'longitude': self.longitude,
            }