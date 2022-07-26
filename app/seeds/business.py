from app.models import db, Business

def seed_businesses():
#-------------------rena 1-4------------------------------------
    business1 = Business(
        user_id=1, 
        name='Grandma\'s Kitchen', 
        description='We are an authentic Chinese restaurant located at Cupertino. Welcome to try our food and thanks for your business especially at this uncertain period.', 
        category_id=1, 
        address='19541 Richwood Dr', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(408)352-5052', 
        website='https://grandmaskitchenca.com/',
        price_range='$$',
        business_hours='11:00AM-8:30PM',
        latitude=37.322188769928474,
        longitude=-122.01485607795601
    )
    business2 = Business(
        user_id=2, 
        name='Haidilao Hot Pot Cupertino', 
        description='Hai Di Lao Hot Pot specializes in traditional Chinese style hot pot. Just like Shabu Shabu, each customer will enjoy their own individual pot instead of sharing a community pot. ', 
        category_id=1, 
        address='19409 Stevens Creek Blvd #100', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(669)230-3117', 
        website='http://www.haidilao.com/sg',
        price_range='$$$',
        business_hours='11:00AM-10:00PM',
        latitude=37.32401533822066,
        longitude=-122.00916881494726
    )
    business3 = Business(
        user_id=3, 
        name='Easterly Cupertino', 
        description='An authentic Chinese Sezchuan restaurant located at Cupertino. Welcome to try our food.', 
        category_id=1, 
        address='10495 S De Anza Blvd STE# C', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(408)255-2507', 
        website='https://order.online/business/easterly-122217',
        price_range='$$',
        business_hours='11:00AM-8:30PM',
        latitude=37.31662768768861, 
        longitude=-122.0329999741509,
    )
    business4 = Business(
        user_id=4, 
        name='Joy Dumpling', 
        description='Taiwanese Dumpling resturant,Neighborhood eatery turning out an extensive menu of Asian specialties & classic dim sum dishes.', 
        category_id=1, 
        address='10895 S Blaney Ave', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(408)217-8339', 
        website='',
        price_range='$',
        business_hours='11AM-8:30PM',
        latitude=37.311439677382815,
        longitude=-122.02450273625277,
    )
#-------------------jingjing 5-10------------------------------------
    business5 = Business(
        user_id=5, 
        name="TANTO Japanese Restaurant", 
        description="The word 'TANTO' can be meant 'much', 'often', and 'a lot of' in English. TANTO was named with the wish of a being a place where people can eat a lot of delicious food and laugh a lot and feel happy. 'TANTO' is originally from the name of the restaurant that our owner chef's brother used to run in Japan.The name and thoughts have been passed down for generations.", 
        category_id=3, 
        address="1063 E El Camino Real", 
        city="Sunnyvale", 
        state="California", 
        zip_code=94087, 
        phone="(408)244-7311", 
        website="https://tantoizakayasunnyvale.com/",
        price_range="$$",
        business_hours="11:30AM-8:30PM",
        latitude=37.35611255892067,
        longitude=-122.00343872290615
    )

    business6 = Business(
        user_id=6, 
        name="Leichi", 
        description="Try our home made soba with sake!!we have special fish from Japan on weekday too.", 
        category_id=3, 
        address="246 Saratoga Ave", 
        city="Santa Clara", 
        state="California", 
        zip_code=95050, 
        phone="(408)320-2725", 
        website="https://leichi-sc.com/",
        price_range="$$$",
        business_hours="11:30AM-9:30PM",
        latitude=37.329867533456195, 
        longitude=-121.96674368708152
    )


    business7 = Business(
        user_id=7, 
        name="Amakai Japanese Cuisine", 
        description="Unique maki & Japanese kitchen entrees fixed up in an unassuming space with sushi bar seating.", 
        category_id=3, 
        address="4300 Great America Pkwy #156", 
        city="Santa Clara", 
        state="California", 
        zip_code=95054, 
        phone="(408)988-2555", 
        website="http://www.amakaisushi.com/",
        price_range="$$",
        business_hours="11:00AM-8:00PM",
        latitude=37.393909949224586, 
        longitude=-121.97734115572653
    )



    business8 = Business(
        user_id=8, 
        name="Pedro's", 
        description="Colorful Mexican eatery with patios servingg a variety of margaritas & traditional fare.", 
        category_id=6, 
        address="3935 Freedom Cir", 
        city="Santa Clara", 
        state="California", 
        zip_code=95054, 
        phone="(408)496-6777", 
        website="http://pedrosrestaurants.com/",
        price_range="$$",
        business_hours="11:30AM-8:00PM",
        latitude=37.385794172144216, 
        longitude=-121.97068927971809
    )

    business9 = Business(
        user_id=9, 
        name="Pho Ha Noi", 
        description="Bustling, dynamic venue with outdoor seating prepping pho, spring rolls & other Vietnamese dishes.", 
        category_id=5, 
        address="10100 S De Anza Blvd", 
        city="Cupertino", 
        state="California", 
        zip_code=95014, 
        phone="(408)899-4164", 
        website="https://phohanoicupertino.com/",
        price_range="$$",
        business_hours="11:00AM-8:45PM",
        latitude=37.3217168749544, 
        longitude=-122.03186930021828
    )

    
    business10 = Business(
        user_id=10, 
        name="Maggiano's Little Italy", 
        description="Semi-upscale chain for classic Italian fare served family-style in a relaxed, polished space.", 
        category_id=7, 
        address="3055 Olin Ave Suite 1000", 
        city="San Jose", 
        state="California", 
        zip_code=95128, 
        phone="(408)423-8973", 
        website="https://www.maggianos.com/",
        price_range="$$",
        business_hours="11:00AM-10:00PM",
        latitude=37.32638847839788, 
        longitude=-121.94872524581221
    )
        

#-------------------jackie 11-15-------------------------------------
    business11 = Business(
        user_id=11, 
        name='Easterly Berkeley', 
        description='human cuisine', 
        category_id=1, 
        address='2142 Center St', 
        city='Berkeley', 
        state='California', 
        zip_code=94704, 
        phone='(510)647-8008', 
        website='easterlyhunancuisineca.com',
        price_range='$$',
        business_hours='11AM-2PM, 4:30-8:30PM',
        latitude=37.87059614579775,
        longitude=-122.26690430571963,
    )

    business12 = Business(
        user_id=12, 
        name='Ogane', 
        description='Best Korean BBQ in Oakland', 
        category_id=2, 
        address='3915 Broadway', 
        city='Oakland', 
        state='California', 
        zip_code=94611, 
        phone='(510)594-8300', 
        website='http://www.ohgane.com/',
        price_range='$$$',
        business_hours='11AM-10PM',
        latitude=37.827523837146636,
        longitude=-122.25727308853337,
    )

    business13 = Business(
        user_id=13, 
        name='Fish & Bird Sousaku Izakaya', 
        description='Elegant outpost serving a modern Japanese izakaya menu with California & global influences.', 
        category_id=3, 
        address='2451 Shattuck Ave.', 
        city='Berkeley', 
        state='California', 
        zip_code=94704, 
        phone='(510)705-1539', 
        website='http://fishbirdizakaya.com/',
        price_range='$$$',
        business_hours='5PM-9PM',
        latitude=37.86502575468001,
        longitude=-122.26717184250737,
    )

    business14 = Business(
        user_id=14, 
        name='Hui Lau Shan', 
        description='Dessert restaurant', 
        category_id=9, 
        address='2282 Fulton St', 
        city='Berkeley', 
        state='California', 
        zip_code=94704, 
        phone='(510)705-1093', 
        website='https://hlsberkeley.smartonlineorder.com/',
        price_range='$',
        business_hours='12:30-9PM',
        latitude=37.86838700521483,
        longitude=-122.26632587318888,
    )

    business15 = Business(
        user_id=15, 
        name='Pho Huong Que', 
        description='Pho, spring rolls & other Vietnamese specialties in an unpretentious counter-service eatery.', 
        category_id=5, 
        address='200 International Blvd', 
        city='Oakland', 
        state='California', 
        zip_code=94606, 
        phone='(510)788-4282', 
        website='https://phohuongque.netlify.app/',
        price_range='$$',
        business_hours='9AM-8PM',
        latitude=37.79821076873998,
        longitude=-122.25620407318888,
            )

#--------------------------------tianyi 16-20---------------------------
    business16 = Business(
        user_id=1, 
        name='Bitter Sweet', 
        description='Bitter + Sweet was launched July 2011 with the mission of serving the best coffee and desserts in the South Bay community.', 
        category_id=8, 
        address='20560 Town Center Ln', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(408)255-2600', 
        website='https://www.bitter-sweet.com',
        price_range='$$',
        business_hours='8:00PM-5:00PM',
        latitude=37.31840612834597,
        longitude=-122.0315217311499
    )

    business17 = Business(
        user_id=2, 
        name='Voyager Craft Coffee', 
        description='Established in 2016. What started as a coffee trailer in San Jose slowly turned into a full-fledged coffee company. We source + roast + brew some of the best coffee. We\'re indebted to the South Bay for all the support we\'ve received over the year. Stop by and say hi!', 
        category_id=8, 
        address='20807 Stevens Creek Blvd', 
        city='Cupertino', 
        state='California', 
        zip_code=95014, 
        phone='(408)320-2325', 
        website='https://www.voyagercraftcoffeeorders.com/',
        price_range='$$',
        business_hours='7:00AM-3:00PM',
        latitude=37.331549490820365,
        longitude=-122.03492261552995
    )
    business18 = Business(
        user_id=3, 
        name='Son & Garden', 
        description='Our first location is located in San Francisco. This is our newest venture from Farmhouse Kitchen Family. We hope to brighten your day with our colorful, delicious and thoughtful creations. #sonandgarden Chef: Kasem S', 
        category_id=9, 
        address='1195 Merrill St', 
        city='Menlo Park', 
        state='California', 
        zip_code=94025, 
        phone='(650)665-7963', 
        website='https://sonandgarden.com/menlo-park',
        price_range='$$',
        business_hours='9:00AM-3:00PM',
        latitude=37.455335207107304,
        longitude=-122.18016297273617
    )
    business19 = Business(
        user_id=4, 
        name='Bloom', 
        description='Inventive breakfast & lunch dishes in industrial-chic surrounds, plus beer, wine & cocktails.', 
        category_id=9, 
        address='202 Saratoga Ave', 
        city='Santa Clara', 
        state='California', 
        zip_code=95050, 
        phone='(408)345-2667', 
        website='https://www.bloomeatery.com/',
        price_range='$$',
        business_hours='8:00AM-2:30PM',
        latitude=37.34094868570866,
        longitude=-121.97137765044666
    )
    business20 = Business(
        user_id=5, 
        name='The Breakfast Club', 
        description='Fresh, local ingredients. Recipes carefully crafted for optimal flavor. That\'s what a meal at The Breakfast Club at Midtown is all about. Well, that and having a great time. When you mix our good vibes with our great morning cocktails, you\'re in for a refreshing and delicious treat. We\'ve got all your favorite sweet dishes in our lineup -- waffles, pancakes, French toast. Or, for our savory food fanatics, we have burgers, sandwiches, and Benedicts. It\'s time you did brunch The Breakfast Club way.', 
        category_id=9, 
        address='1432 W San Carlos St', 
        city='San Jose', 
        state='California', 
        zip_code=95126, 
        phone='(408) 564-7150', 
        website='http://www.bcmidtown.com/',
        price_range='$$',
        business_hours='7:00AM-3:00PM',
        latitude=37.32343148948551,
        longitude=-121.9142846460296
    )

    

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)
    db.session.add(business7)
    db.session.add(business8)
    db.session.add(business9)
    db.session.add(business10)
    db.session.add(business11)
    db.session.add(business12)
    db.session.add(business13)
    db.session.add(business14)
    db.session.add(business15)
    db.session.add(business16)
    db.session.add(business17)
    db.session.add(business18)
    db.session.add(business19)
    db.session.add(business20)
    

    db.session.commit()

def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
