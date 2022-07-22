from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"), nullable=False)
    rating = db.Column(db.Integer, nullable = False)
    content = db.Column(db.Text, nullable = False)
    created_at = db.Column(db.DateTime(timezone=False), nullable=False)

    user = db.relationship('User', back_populates='reviews')
    business = db.relationship('Business', back_populates='reviews')


def to_dict(self):
    return {
            'id': self.id,
            'user_id': self.user_id,
            'business_id': self.business_id,
            'rating': self.rating,
            'content': self.content
        }