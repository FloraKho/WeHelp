from app.models import db, Review
import datetime

def seed_reviews():
    #----------------------rena 1-4--------------------------------------
    biz1_rev1 = Review(
        user_id=15,
        business_id=1,
        rating=5,
        content='The hot and sour soup was slightly spicier than I\'ve had, but so delicious.',
        created_at=datetime.datetime.now()
    )
    biz1_rev2 = Review(
        user_id=14,
        business_id=1,
        rating=4,
        content='Ordered the Chives Fried Pork Rolls, salt and pepper pork, mapo tofu, and green vegetable stir fried with garlic. Kids really liked the fried chives rolls and salt and pepper pork. The restaurant\'s name is sweet as well, makes one feel like they are coming home for food!',
        created_at=datetime.datetime.now()
    )
    biz1_rev3 = Review(
        user_id=13,
        business_id=1,
        rating=5,
        content='Pick up was easy and food is delicious. The menu truly has something for everybody. The service was excellent and the staff were friendly and professional.',
        created_at=datetime.datetime.now()
    )
    biz2_rev1 = Review(
        user_id=12,
        business_id=2,
        rating=4,
        content='Haidilao is a luxury hot pot establishment with great service and a spacious dining room. Some of the things I appreciate are the excellent service of the staff --they were prompt in answering our requests and quick to take away used bowls/plates-- the large dining tables, arranged with plenty of countertop space for the food and a small cart next to each table for used trays. The overall dining experience is well thought out as many below have mentioned: they give each customer an apron (to protect the clothes) and ziplock bags (to protect cellphone). Therefore, the dining experience is clean and comfortable. Some items worth ordering are the seafood combo plate, veggie combo plate, and instant noodles. The sauce bar is well-stocked and filled with killer condiments. I will be sure to return to Haidilao the next time I have a special event.',
        created_at=datetime.datetime.now()
    )
    biz2_rev2 = Review(
        user_id=11,
        business_id=2,
        rating=4,
        content='Warning: There is no parking!!! We had to park in the garage and walk over...annoying especially when ur hungryy!!',
        created_at=datetime.datetime.now()
    )
    biz3_rev1 = Review(
        user_id=10,
        business_id=3,
        rating=5,
        content='Our family liked the stir-fried fish fillets with chopped pepper, the eggplant with minced pork, garlic, and cilantro (a classic!) and the fried lamb chops.',
        created_at=datetime.datetime.now()
    )
    biz3_rev2 = Review(
        user_id=9,
        business_id=3,
        rating=5,
        content='Food is very nice, Especially this bullfrog is delicious, very fresh, and the dishes are generous and spicy ,Authentic Hunan taste I will come again!',
        created_at=datetime.datetime.now()
    )
    biz4_rev1 = Review(
        user_id=8,
        business_id=4,
        rating=5,
        content='Quite frankly, the dumplings, sui mai, and noodles were all the best ever (IMO) category for me. I almost always order braised beef noodle whenever I go to Taiwanese joints and this one was absolutely outstanding. The soup was so flavorful, beef was tender x 1,000 and the noodles were the right Al dente. I wish the soup was a little hotter (not spicy but more hot) but honestly it\'s hands down the best I\'ve ever had. Both the dumplings came out fresh and warm. The juicy dumpling had a good amount of crab and the juice didn\'t burn my mouth. The sui mai was exceptional. Super tender and really good flavor. I never ended up using my black vinegar because I wanted to savor all the flavor.',
        created_at=datetime.datetime.now()
    )
    biz4_rev2 = Review(
        user_id=7,
        business_id=4,
        rating=4,
        content='It looks pretty small from the outside but its very spacious inside. I think the tofu and the egg dish we got was really good. The dumplings were pretty good but not the best I had. The shao mai was very good as well. I also think the service was fast and they were very nice. We brought a one year old as well and they were accommodating with a high chair and plastic utensils with a smaller bowl!',
        created_at=datetime.datetime.now()
    )
    #-------------------jingjing 5-10------------------------------------
    biz5_rev1 = Review(
        user_id=6,
        business_id=5,
        rating=5,
        content="This place never disappoints! I've been here 8 times now both to eat in or to order to go. I always order the spicy cod roe pasta, it's so creamy and delicious.The deluxe chirashi was also very fresh and filling! The sashimi included scallop,salmon,tuna, red snapper, mackerel,eel, salmon roe, sea urchin, and shrimp. The Kaki fry curry (Japanese curry rice with deep fried oysters) was a 10/10 for us! The wait is typically long for this place which is why to-go is a great option. I'm already planning my next trip back!",
        created_at=datetime.datetime.now()
    )
    biz5_rev2 = Review(
        user_id=4,
        business_id=5,
        rating=5,
        content="I've eaten here twice, and it's definitely worth the wait! Both times I came without reservations, and they let us know how long the wait would be (40-50 min each time), and we were called to be seated by the estimated time. I liked the gyu ikara don, ishiyaki butameshi, and the garlic steak with the ishiyaki butameshi being my favorite.The service was good, and I like sitting at the booths that they have on the side of the restaurant. The parking spaces right in front and next to the restaurant are pretty limited, but there's more parking by the businesses that are behind within the same plaza. I'll make a reservation ahead of time next time I come!",
        created_at=datetime.datetime.now()
    )

    biz6_rev1 = Review(
        user_id=3,
        business_id=6,
        rating=3,
        content="My husband and I came here for an anniversary lunch (with our baby) and had a superb meal!We kind of went all out and ordered a BUNCH of food since we rarely get to go out without our (loud + needy) toddler! The waitress actually didn't 'want' to take our orders cuz she probably was thinking 'why the heck are these 2 people ordering enough food for 4?!' LOL...",
        created_at=datetime.datetime.now()
    )
    biz6_rev2 = Review(
        user_id=5,
        business_id=6,
        rating=3,
        content="We made a reservation for 1pm for 3. Arrived around 12:50pm and approached the restaurant entrance where we see a waitlist clipboard with a doorbell. I rang it and let the waitress know about our reservation. We weren't seated until around 1:10pm.The table wasn't wiped properly as there was still crumbs and leftover food on the surface. Though the place wasn't too big, the restaurant was busy. The waiters were running around (I think there were only 3) so I just wiped it down myself with the extra napkin on the table.",
        created_at=datetime.datetime.now()
    )



    biz7_rev1 = Review(
        user_id=2,
        business_id=7,
        rating=4,
        content="Great hole in the wall spot for a quick lunch on a work day. Plenty of options and decent quality fish at a reasonable price.If you are coming at lunch, I would recommend coming before the noon rush. The parking lot is super small considering how many shops are in that plaza.",
        created_at=datetime.datetime.now()
    )
    biz7_rev2 = Review(
        user_id=1,
        business_id=7,
        rating=5,
        content="Very nice lunch - will definitely go back.I was hungry for sushi and had their lunch special with stashing and a roll, just the right amount of food and very fresh.",
        created_at=datetime.datetime.now()
    )



    biz8_rev1 = Review(
        user_id=1,
        business_id=8,
        rating=4,
        content="The place has nice decor inside and out. The business advertises free nachos appetizer with Yelp check in but we ran into some obstacles with the restaurant redeeming it which was a bit of an annoyance. Glad it finally did work out. The presentation was nice and it was tasty. We liked our bartender and ordered an extra shot of Patron. They have a pretty good happy hour too, check it out.",
        created_at=datetime.datetime.now()
    )
    biz8_rev2 = Review(
        user_id=2,
        business_id=8,
        rating=4,
        content="3.5 stars but rounding up.I was attracted to this restaurant's exterior design. It looked like a castle when I was looking at the photos so I decided to swing by,",
        created_at=datetime.datetime.now()
    )



    biz9_rev1 = Review(
        user_id=3,
        business_id=9,
        rating=5,
        content="My friend heard this place was good and we tried it out. For a Saturday afternoon, they were fast to seat us and our food came out fast. Still craving their Food.",
        created_at=datetime.datetime.now()
    )
    biz9_rev2 = Review(
        user_id=4,
        business_id=9,
        rating=4,
        content="We've seen this place with the HUGE umbrella for outdoor dining during COVID and didn't end up dining in until things started opening up. Since we go to the Cupertino library quite frequently, we found ourselves here for lunch on a few occasions after our library trip. Their food is great & service is good - we did have a hard time accepting some of the prices on the menu though...stick to the pho and avoid everything else LOL...",
        created_at=datetime.datetime.now()
    )


    biz10_rev1 = Review(
        user_id=5,
        business_id=10,
        rating=5,
        content="Good Italian food. We visit Santana row, shopping and dining. Always eat at Maggiano's Good dessert too",
        created_at=datetime.datetime.now()
    )
    biz10_rev2 = Review(
        user_id=6,
        business_id=10,
        rating=5,
        content="My husband, daughter, and I had a lovely lunch here. Everything was good, including the service! They give you cute individual pieces of french bread with olive oil & balsamic vinegar for dipping. We shared a side Caesar salad, and a Margarita flatbread. I ordered the backed Ziti, my daughter, the pepper shrimp pasta, my husband the lasagna. They were kind enough to substitute the tomato-vodka-cream sauce in my Ziti instead of the normal tomato sauce at my request. For dessert, we shared a creamy & rich tiramisu. All in all, a wonderful meal!",
        created_at=datetime.datetime.now()
    )
    #-------------------jackie 11-15-------------------------------------
    biz11_rev1 = Review(
        user_id=7,
        business_id=11,
        rating=4,
        content='Absolute highlight is the fish filet soup dish. So hearty,warm and perfectly savory. Makes for a killer broth to pair with rice. Lamb was a bit oily, but still really solid. Great service. No doubt Easterly is a top 3 Chinese restaurant in Berkeley.',
        created_at=datetime.datetime.now()
    )
    biz12_rev1 = Review(
        user_id=8,
        business_id=12,
        rating=4,
        content="Great food and great selection of meat.  Place is located tucked away inside the South Shore Shopping Center.  Place does get quite busy.  They have a buzzer on the corner of the table and a QR code for their menu.  They have three different price structure and we opted for the middle AYCE price.  Their small dishes are really small; their broccoli there were two pieces and we had six people.  Even when we asked for a refill they just brought out two pieces (and we had six people).  The meat quality is very good and everything was fresh.  Staff here can be a bit disheveled.  We gave one of the waiter our water pitcher only to never see it again until we asked someone else for it.  There were some items delivered to our table that we didn't order ( we grilled it anyway).",
        created_at=datetime.datetime.now()
    )
    biz13_rev1 = Review(
        user_id=9,
        business_id=13,
        rating=3,
        content="I love everything here. The food was decent and ingredients were fresh, but over priced. I recommend their cocktails! They not only look pretty but also taste really good! Food wise, I recommend to get their grilled saba and beef tataki.The Kaisen don, kurobuda nabe(hot pot soup) and fried chicken were decent, but they don't worth the price. Notice: they don't serve wagyu bbq set anymore.",
        created_at=datetime.datetime.now()
    )
    biz14_rev1 = Review(
        user_id=10,
        business_id=14,
        rating=5,
        content="I ordered the mango and coconut juice with crystal jelly. It was so delicious! The coconut frosty part was creamy and sweet and the mango frosty was super refreshing. A super cute shop and they have discounts on mondays if you order through snackpass. Most of their menu is mango based, and I'm a huge fan of mango so I loved it!",
        created_at=datetime.datetime.now()
    )
    biz15_rev1 = Review(
        user_id=11,
        business_id=15,
        rating=5,
        content="This place is the best in all of Oakland. Seriously the way they cook their broth for the beef pho just cannot be matched. I've tried other places but this one is just so perfect! Spring rolls were also great, very good portions, even on takeout they don't skimp on the food. We go here practically weekly it's that damn good",
        created_at=datetime.datetime.now()
    )


    
    #-------------------16-20-------------------------------------
    biz16_rev1 = Review(
        user_id=12,
        business_id=16,
        rating=5,
        content="This has been our go to place for coffee for last few weeks even though it's a bit of a drive for us. They make an amazing cup of Red Velvet Latte. We usually get the mini sized as we don't like too much milk in our lattes and the foam is just perfect.",
        created_at=datetime.datetime.now()
    )
    biz16_rev2 = Review(
        user_id=13,
        business_id=16,
        rating=3,
        content="This place is insanely quiet, came in on a tuesday around 4pm and every single table inside was taken. I did not enjoy my experience here, it was pretty mediocre. I wouldn't say the barista was rude, but definitely not friendly. He seemed annoyed about something. We ordered 4 drinks, the lavender latte, vietnamese coffee, cookies and cream blended, and the red velvet blended. The red velvet blended and lavender latte were interesting drinks but the other 2 were pretty typical.",
        created_at=datetime.datetime.now()
    )


    biz17_rev1 = Review(
        user_id=14,
        business_id=17,
        rating=4,
        content="The coffee was good. Although there could be some room for improvement in the brewing temperature imho.",
        created_at=datetime.datetime.now()
    )
    biz17_rev2 = Review(
        user_id=15,
        business_id=17,
        rating=4,
        content="This might become my go to coffee shop. Smooth matcha- great strawberry taste. The coffee was also smooth - curious to try more combinations. Loved how they offered to warm up the pastries. The croissant was perfectly flaky butter. The tart was delicious but the icing was a bit too sweet.I like the outdoor seating options.",
        created_at=datetime.datetime.now()
    )

    biz18_rev1 = Review(
        user_id=1,
        business_id=18,
        rating=5,
        content="Decorations and presentation of food is lovely, i loved the Cloud 9 drink!! Got the Bibimbap and flavor was alright, pork belly panini was good. Overall very beautiful plates but have had better flavors.",
        created_at=datetime.datetime.now()
    )
    biz18_rev2 = Review(
        user_id=2,
        business_id=18,
        rating=5,
        content="If you're looking for pretty brunch place that serves pretty food that is also good but a little pricey, we found it.",
        created_at=datetime.datetime.now()
    )

    biz19_rev1 = Review(
        user_id=3,
        business_id=19,
        rating=5,
        content="Excellent service and waiting on a Sunday was not too bad as it was an suggested 40 minute wait but really we were notified of our table being ready within 30 minutes! We were part of five and all our food came out all at once a very timely matter and drinks for all around delicious! I highly recommend this restaurant it's not mediocre and it's such a pretty vibe.",
        created_at=datetime.datetime.now()
    )
    biz19_rev2 = Review(
        user_id=5,
        business_id=19,
        rating=5,
        content="Service: A+ and Food: A+ && Bloom is by far one my favorite places for eating breakfast. They have a very good breakfast and lunch options. Although I haven't tried any lunch options, their breakfast items are insanely delicious. My favorite so far is their croissant French toast.",
        created_at=datetime.datetime.now()
    )


    biz20_rev1 = Review(
        user_id=4,
        business_id=20,
        rating=5,
        content="I love this place for breakfast/brunch/lunch. The service and food is an A+++ from pre-pandemic til now. I'm not a Bloody Mary fan, but their spicy Bloody Mary..oh man, sooo good.",
        created_at=datetime.datetime.now()
    )
    biz20_rev2 = Review(
        user_id=6,
        business_id=20,
        rating=3,
        content="Be wary for Sunday brunch. There was an extremely long wait with no options for reservations. Tried the Neptune Benedict and first impressions is that they have very large portions. But flavor wise, it was very one dimensional, everything just tasted like hollandaise sauce which overpowered the delicate crab and shrimp.",
        created_at=datetime.datetime.now()
    )

    biz21_rev1 = Review(
        user_id=7,
        business_id=21,
        rating=5,
        content="Had a great meal with my family here. The decorations were fantastic (protip, really take a look around! They put a lot of thought into the decor) the staff was very friendly and also dressed to the occasion leading to an immersive dining experience.",
        created_at=datetime.datetime.now()
    )
    biz21_rev2 = Review(
        user_id=8,
        business_id=21,
        rating=5,
        content="Ambience was amazing! The staff are so nice!The portions are huge btw. If you want to try different dishes, I go if you are starving or go in a large group :)",
        created_at=datetime.datetime.now()
    )

    biz22_rev1 = Review(
        user_id=1,
        business_id=22,
        rating=3,
        content="Ordered Pad See Ew via Doordash pickup. Order was ready fairly quickly. When I opened the container at home, I was disappointed. Instead of wide noodle as it should've come with, it was made with the thin noodle you'd see in their Pad Thai. The ticket clearly said Pad See Ew. Worst part is the noodle were all clumped together and the entire dish was flavorless.",
        created_at=datetime.datetime.now()
    )
    
    biz22_rev2 = Review(
        user_id=2,
        business_id=22,
        rating=2,
        content="Not enough help and I've never had a restaurant hand me a pen and piece of paper and write up my order.  Never checked on my table and they didn't have Thai Chili oil.  Food is also mediocre.",
        created_at=datetime.datetime.now()
    )



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

    db.session.add(biz11_rev1)

    db.session.add(biz12_rev1)

    db.session.add(biz13_rev1)

    db.session.add(biz14_rev1)

    db.session.add(biz15_rev1)

    db.session.add(biz16_rev1)
    db.session.add(biz16_rev2)

    db.session.add(biz17_rev1)
    db.session.add(biz17_rev2)

    db.session.add(biz18_rev1)
    db.session.add(biz18_rev2)

    db.session.add(biz19_rev1)
    db.session.add(biz19_rev2)

    db.session.add(biz20_rev1)
    db.session.add(biz20_rev2)

    db.session.add(biz21_rev1)
    db.session.add(biz21_rev2)

    db.session.add(biz22_rev1)
    db.session.add(biz22_rev2)



    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()