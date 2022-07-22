from app.models import db, Review

def seed_business_img():
    biz1_rev1 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content='The hot and sour soup was slightly spicier than I\'ve had, but so delicious.'
    )
    biz1_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    biz1_rev3 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    biz2_rev1 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    biz2_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    biz3_rev1 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content='Our family liked the stir-fried fish fillets with chopped pepper, the eggplant with minced pork, garlic, and cilantro (a classic!) and the fried lamb chops.'
    )
    biz3_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content='Food is very nice, Especially this bullfrog is delicious, very fresh, and the dishes are generous and spicy ,Authentic Hunan taste I will come again!'
    )
    biz4_rev1 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    biz4_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content=''
    )
    