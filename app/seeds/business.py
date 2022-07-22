from app.models import db, Business

def seed_business():
    business1 = Business(
        user_id=1, 
        name='Grandma\'s Kitchen', 
        description='We are an authentic Chinese restaurant located at Cupertino. Welcome to try our food and thanks for your business especially at this uncertain period.', 
        category_id=1, 
        address='19541 Richwood Dr', 
        city='Cupertino', 
        state='CA', 
        zip_code=95014, 
        phone='(408)352-5052', 
        website='https://grandmaskitchenca.com/',
        price_range='$$',
        business_hours='11:00AM-8:30PM',
        latitude=37.322188769928474,
        longitude=-122.01485607795601
    )
    business2 = Business(
        user_id=1, 
        name='Haidilao Hot Pot Cupertino', 
        description='Hai Di Lao Hot Pot specializes in traditional Chinese style hot pot. Just like Shabu Shabu, each customer will enjoy their own individual pot instead of sharing a community pot. ', 
        category_id=1, 
        address='19409 Stevens Creek Blvd #100', 
        city='Cupertino', 
        state='CA', 
        zip_code=95014, 
        phone='(669) 230-3117', 
        website='http://www.haidilao.com/sg',
        price_range='$$$',
        business_hours='11:00AM-10:00PM',
        latitude=37.32401533822066,
        longitude=-122.00916881494726
    )
    business3 = Business(
        user_id=1, 
        name='Easterly Cupertino', 
        description='An authentic Chinese Sezchuan restaurant located at Cupertino. Welcome to try our food.', 
        category_id=1, 
        address='10495 S De Anza Blvd STE# C', 
        city='Cupertino', 
        state='CA', 
        zip_code=95014, 
        phone='(408) 255-2507', 
        website='https://order.online/business/easterly-122217',
        price_range='$$',
        business_hours='11:00AM-8:30PM',
        latitude=37.31662768768861, 
        longitude=-122.0329999741509,
    )
    business4 = Business(
        user_id=1, 
        name='Joy Dumpling', 
        description='Taiwanese Dumpling resturant,Neighborhood eatery turning out an extensive menu of Asian specialties & classic dim sum dishes.', 
        category_id=1, 
        address='10895 S Blaney Ave', 
        city='Cupertino', 
        state='CA', 
        zip_code=95014, 
        phone='(408) 217-8339', 
        website='',
        price_range='$',
        business_hours='11AM-8:30PM',
        latitude=37.311439677382815,
        longitude= -122.02450273625277,
    )

    

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    # db.session.add(business5)
    # db.session.add(business6)
    # db.session.add(business7)
    # db.session.add(business8)
    # db.session.add(business9)
    # db.session.add(business10)
    # db.session.add(business11)
    # db.session.add(business12)
    # db.session.add(business13)
    # db.session.add(business14)
    # db.session.add(business15)
    # db.session.add(business16)
    # db.session.add(business17)
    # db.session.add(business18)
    # db.session.add(business19)
    # db.session.add(business20)
    

    db.session.commit()