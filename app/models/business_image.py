from .db import db

class Business_Image(db.Model):
    __tablename__ = "business_images"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"), nullable=False)
    image_url = db.Column(db.Text, nullable=False)

    business = db.relationship("Business", back_populates="business_images")
    user = db.relationship("User", back_populates="business_images")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "business_id": self.business_id,
            "image_url": self.image_url
        }




    