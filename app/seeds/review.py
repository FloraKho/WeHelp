from app.models import db, Review

def seed_business_img():
    #----------------------rena 1-4--------------------------------------
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
        rating=4,
        content='Ordered the Chives Fried Pork Rolls, salt and pepper pork, mapo tofu, and green vegetable stir fried with garlic. Kids really liked the fried chives rolls and salt and pepper pork. The restaurant\'s name is sweet as well, makes one feel like they are coming home for food!'
    )
    biz1_rev3 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=5,
        content='Pick up was easy and food is delicious. The menu truly has something for everybody. The service was excellent and the staff were friendly and professional.'
    )
    biz2_rev1 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=4,
        content='Haidilao is a luxury hot pot establishment with great service and a spacious dining room. Some of the things I appreciate are the excellent service of the staff --they were prompt in answering our requests and quick to take away used bowls/plates-- the large dining tables, arranged with plenty of countertop space for the food and a small cart next to each table for used trays. The overall dining experience is well thought out as many below have mentioned: they give each customer an apron (to protect the clothes) and ziplock bags (to protect cellphone). Therefore, the dining experience is clean and comfortable. Some items worth ordering are the seafood combo plate, veggie combo plate, and instant noodles. The sauce bar is well-stocked and filled with killer condiments. I will be sure to return to Haidilao the next time I have a special event.'
    )
    biz2_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=4,
        content='Warning: There is no parking!!! We had to park in the garage and walk over...annoying especially when ur hungryy!!'
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
        content='Quite frankly, the dumplings, sui mai, and noodles were all the best ever (IMO) category for me. I almost always order braised beef noodle whenever I go to Taiwanese joints and this one was absolutely outstanding. The soup was so flavorful, beef was tender x 1,000 and the noodles were the right Al dente. I wish the soup was a little hotter (not spicy but more hot) but honestly it\'s hands down the best I\'ve ever had. Both the dumplings came out fresh and warm. The juicy dumpling had a good amount of crab and the juice didn\'t burn my mouth. The sui mai was exceptional. Super tender and really good flavor. I never ended up using my black vinegar because I wanted to savor all the flavor.'
    )
    biz4_rev2 = Review(
        business_id='1',
        user_id=1,
        business_id=1,
        rating=4,
        content='It looks pretty small from the outside but its very spacious inside. I think the tofu and the egg dish we got was really good. The dumplings were pretty good but not the best I had. The shao mai was very good as well. I also think the service was fast and they were very nice. We brought a one year old as well and they were accommodating with a high chair and plastic utensils with a smaller bowl!'
    )
    #-------------------jingjing 5-10------------------------------------
    biz5_rev1 = Review(
        user_id=2,
        business_id=5,
        rating=5,
        content="This place never disappoints! I've been here 8 times now both to eat in or to order to go. I always order the spicy cod roe pasta, it's so creamy and delicious.The deluxe chirashi was also very fresh and filling! The sashimi included scallop,salmon,tuna, red snapper, mackerel,eel, salmon roe, sea urchin, and shrimp. The Kaki fry curry (Japanese curry rice with deep fried oysters) was a 10/10 for us! The wait is typically long for this place which is why to-go is a great option. I'm already planning my next trip back!"
    )
    biz5_rev2 = Review(
        user_id=3,
        business_id=5,
        rating=5,
        content="I've eaten here twice, and it's definitely worth the wait! Both times I came without reservations, and they let us know how long the wait would be (40-50 min each time), and we were called to be seated by the estimated time. I liked the gyu ikara don, ishiyaki butameshi, and the garlic steak with the ishiyaki butameshi being my favorite.The service was good, and I like sitting at the booths that they have on the side of the restaurant. The parking spaces right in front and next to the restaurant are pretty limited, but there's more parking by the businesses that are behind within the same plaza. I'll make a reservation ahead of time next time I come!"
    )

    biz6_rev1 = Review(
        user_id=2,
        business_id=6,
        rating=3,
        content="My husband and I came here for an anniversary lunch (with our baby) and had a superb meal!We kind of went all out and ordered a BUNCH of food since we rarely get to go out without our (loud + needy) toddler! The waitress actually didn't 'want' to take our orders cuz she probably was thinking 'why the heck are these 2 people ordering enough food for 4?!' LOL..."
    )
    biz6_rev2 = Review(
        user_id=3,
        business_id=6,
        rating=3,
        content="We made a reservation for 1pm for 3. Arrived around 12:50pm and approached the restaurant entrance where we see a waitlist clipboard with a doorbell. I rang it and let the waitress know about our reservation. We weren't seated until around 1:10pm.The table wasn't wiped properly as there was still crumbs and leftover food on the surface. Though the place wasn't too big, the restaurant was busy. The waiters were running around (I think there were only 3) so I just wiped it down myself with the extra napkin on the table."
    )



    biz7_rev1 = Review(
        user_id=2,
        business_id=7,
        rating=4,
        content="Great hole in the wall spot for a quick lunch on a work day. Plenty of options and decent quality fish at a reasonable price.If you are coming at lunch, I would recommend coming before the noon rush. The parking lot is super small considering how many shops are in that plaza."
    )
    biz7_rev2 = Review(
        user_id=3,
        business_id=7,
        rating=5,
        content="Very nice lunch - will definitely go back.I was hungry for sushi and had their lunch special with stashing and a roll, just the right amount of food and very fresh."
    )



    biz8_rev1 = Review(
        user_id=2,
        business_id=8,
        rating=4,
        content="The place has nice decor inside and out. The business advertises free nachos appetizer with Yelp check in but we ran into some obstacles with the restaurant redeeming it which was a bit of an annoyance. Glad it finally did work out. The presentation was nice and it was tasty. We liked our bartender and ordered an extra shot of Patron. They have a pretty good happy hour too, check it out."
    )
    biz8_rev2 = Review(
        user_id=3,
        business_id=8,
        rating=4,
        content="3.5 stars but rounding up.I was attracted to this restaurant's exterior design. It looked like a castle when I was looking at the photos so I decided to swing by,"
    )



    biz9_rev1 = Review(
        user_id=2,
        business_id=9,
        rating=5,
        content="My friend heard this place was good and we tried it out. For a Saturday afternoon, they were fast to seat us and our food came out fast. Still craving their Food."
    )
    biz9_rev2 = Review(
        user_id=3,
        business_id=9,
        rating=4,
        content="We've seen this place with the HUGE umbrella for outdoor dining during COVID and didn't end up dining in until things started opening up. Since we go to the Cupertino library quite frequently, we found ourselves here for lunch on a few occasions after our library trip. Their food is great & service is good - we did have a hard time accepting some of the prices on the menu though...stick to the pho and avoid everything else LOL..."
    )


    biz10_rev1 = Review(
        user_id=2,
        business_id=10,
        rating=5,
        content="Good Italian food. We visit Santana row, shopping and dining. Always eat at Maggiano's Good dessert too"
    )
    biz10_rev2 = Review(
        user_id=3,
        business_id=10,
        rating=5,
        content="My husband, daughter, and I had a lovely lunch here. Everything was good, including the service! They give you cute individual pieces of french bread with olive oil & balsamic vinegar for dipping. We shared a side Caesar salad, and a Margarita flatbread. I ordered the backed Ziti, my daughter, the pepper shrimp pasta, my husband the lasagna. They were kind enough to substitute the tomato-vodka-cream sauce in my Ziti instead of the normal tomato sauce at my request. For dessert, we shared a creamy & rich tiramisu. All in all, a wonderful meal!"
    )
    #-------------------jackie 11-15-------------------------------------
    #-------------------tianyi 16-20-------------------------------------

    db.session.add(biz1_rev1)
    db.session.add(biz1_rev2)
    db.session.add(biz1_rev3)

    db.session.add(biz2_rev1)
    db.session.add(biz2_rev2)

    db.session.add(biz3_rev1)
    db.session.add(biz3_rev2)

    db.session.add(biz4_rev1)
    db.session.add(biz4_rev2)

    db.session.add(biz5_rev1)
    db.session.add(biz5_rev2)

    db.session.add(biz6_rev1)
    db.session.add(biz6_rev2)

    db.session.add(biz7_rev1)
    db.session.add(biz7_rev2)

    db.session.add(biz8_rev1)
    db.session.add(biz8_rev2)

    db.session.add(biz9_rev1)
    db.session.add(biz9_rev2)

    db.session.add(biz10_rev1)
    db.session.add(biz10_rev2)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE REVIEWS RESTART IDENTITY CASCADE;')
    db.session.commit()