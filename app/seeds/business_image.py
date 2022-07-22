from app.models import db, Business_Image

def seed_business_img():
    #-------------------rena 1-4-----------------------------------------
    biz1_img1 = Business_Image(
        business_id=1,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/IQy2xmfRngt3a6AkddqlHw/o.jpg'
    )
    biz1_img2 = Business_Image(
        business_id=1,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/5WZCYwhZvADMyqNNWgVZQA/o.jpg'
    )
    biz1_img3 = Business_Image(
        business_id=1,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/VSuI4K1MgMu7qKxEmuTQxQ/o.jpg'
    )
    biz1_img4 = Business_Image(
        business_id=1,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/dRXy__VY7ZthNrRZHovP8g/o.jpg'
    )

    biz2_img1 = Business_Image(
        business_id=2,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/7CykRNWxYSO_SOV_KICA-Q/o.jpg'
    )
    biz2_img2 = Business_Image(
        business_id=2,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/WeV4pESI9jd4f41QLhLTDg/o.jpg'
    )
    biz2_img3 = Business_Image(
        business_id=2,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/bHxVtP6t4cuXlKTcDmvsJg/o.jpg'
    )
    biz2_img4 = Business_Image(
        business_id=2,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ltlcr1KPwyIdUcAg_EdaAQ/o.jpg'
    )

    biz3_img1 = Business_Image(
        business_id=3,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/n3vZUObz6T896qYbQyepZw/o.jpg'
    )
    biz3_img2 = Business_Image(
        business_id=3,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/rgt2R7pBrmgAnH3O_OyXtA/o.jpg'
    )
    biz3_img3 = Business_Image(
        business_id=3,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/BUs4GUuWTk4ndtT5D8Zp7Q/o.jpg'
    )
    biz3_img4 = Business_Image(
        business_id=3,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/7tslvYUxSkf2iDD7I7XwEA/o.jpg'
    )

    biz4_img1 = Business_Image(
        business_id=4,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/e3Ky4g0cw-_btm1ElMI8YA/o.jpg'
    )
    biz4_img2 = Business_Image(
        business_id=4,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ZTM56xfgmLUBXmOiaRxISQ/o.jpg'
    )
    biz4_img3 = Business_Image(
        business_id=4,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/vRCL1q9O3spx36hPwHK-Zw/o.jpg'
    )
    biz4_img4 = Business_Image(
        business_id=4,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/PDYKsDToFc7ag1dk4DrapQ/o.jpg'
    )

    #-------------------jingjing 5-10------------------------------------
    biz5_img1 = Business_Image(
        business_id=5,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/c98fBPi6pMiCGm0rbZ7V2A/258s.jpg"
    )
    biz5_img2 = Business_Image(
        business_id=5,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/bNfKRqQlr77yB2v4uAHqng/348s.jpg"
    )
    biz5_img3 = Business_Image(
        business_id=5,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/XqoSP-2VBQt8TvfQkWBZUQ/348s.jpg"
    )
    biz5_img4 = Business_Image(
        business_id=5,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/d2z-ZTDHO_z0bHiQjC9Tsw/258s.jpg"
    )

    biz6_img1 = Business_Image(
        business_id=6,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/-Nc4VoPEtbeWk0be6ud2GA/348s.jpg"
    )
    biz6_img2 = Business_Image(
        business_id=6,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/VfoAOwBPNOOfItPwItZavQ/348s.jpg"
    )
    biz6_img3 = Business_Image(
        business_id=6,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/BTsqqcToHys2hWuDXwvEcQ/348s.jpg"
    )
    biz6_img4 = Business_Image(
        business_id=6,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/npycUgBOkQXHZGIHO5cSqQ/348s.jpg"
    )


    biz7_img1 = Business_Image(
        business_id=7,
        image_url="https://www.yelp.com/menu/amakai-japanese-cuisine-santa-clara/california-roll"
    )
    biz7_img2 = Business_Image(
        business_id=7,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/IOvKzlmTfOKTXeKX5Crk5Q/348s.jpg"
    )
    biz7_img3 = Business_Image(
        business_id=7,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/bY9MDtgWar6X2OJSSv0xIQ/348s.jpg"
    )
    biz7_img4 = Business_Image(
        business_id=7,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/Mxqe0Gzyysm4yRPq65aBzQ/348s.jpg"
    )


    biz8_img1 = Business_Image(
        business_id=8,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/0xgPqhba9Uunjq1QnwpiTQ/348s.jpg"
    )
    biz8_img2 = Business_Image(
        business_id=8,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/CvNdDfqacmyz-1D8jEwPpA/348s.jpg"
    )
    biz8_img3 = Business_Image(
        business_id=8,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/_NqRfMDhxIkHLoRWIEckqA/348s.jpg"
    )
    biz8_img4 = Business_Image(
        business_id=8,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/ro1IA9vIPUKejBS93tZn6g/348s.jpg"
    )


    biz9_img1 = Business_Image(
        business_id=9,
        image_url="https://www.yelp.com/menu/pho-ha-noi-cupertino/5-grilled-pork-rolls-nem-nuong-cuon"
    )
    biz9_img2 = Business_Image(
        business_id=9,
        image_url="https://www.yelp.com/menu/pho-ha-noi-cupertino/56-rock-n-roll-steak-w-tomato-rice-com-bo-luc-lac"
    )
    biz9_img3 = Business_Image(
        business_id=9,
        image_url="https://www.yelp.com/menu/pho-ha-noi-cupertino/13-rare-flank-steak-brisket-and-fat-brisket-pho-pho-tai-nam-gau"
    )
    biz9_img4 = Business_Image(
        business_id=9,
        image_url="https://www.yelp.com/menu/pho-ha-noi-cupertino/37-combination-of-chicken-egg-noodles-soup-mi-ga-dac-biet"
    )


    biz10_img1 = Business_Image(
        business_id=10,
        image_url="https://www.yelp.com/menu/maggianos-little-italy-san-jose/chopped-salad"
    )
    biz10_img2 = Business_Image(
        business_id=10,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/1vzbdP8976myumgPzZ19qQ/348s.jpg"
    )
    biz10_img3 = Business_Image(
        business_id=10,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/PZuxP4b3E9v6muWO-6QCCA/348s.jpg"
    )
    biz10_img4 = Business_Image(
        business_id=10,
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/QHYp7hfyPq_LRhhCZ4g3Vw/348s.jpg"
    )

    #-------------------jackie 11-15-------------------------------------
    biz11_img1 = Business_Image(
        business_id=11,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/w7S_vo4oiH3acvUM19BWHA/o.jpg'
    )
    biz11_img2 = Business_Image(
        business_id=11,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/wYRHW4j1bPy-f0yPCCueWg/o.jpg'
    )
    biz11_img3 = Business_Image(
        business_id=11,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/fQ2sPzqkji7qruibUrwJTA/o.jpg'
    )
    biz11_img4 = Business_Image(
        business_id=11,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/aiqXPrDkXTfilR9FHKc4hA/o.jpg'
    )

    biz12_img1 = Business_Image(
        business_id=12,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Uk47b20BEv4CG2QyKO0vFA/o.jpg'
    )
    biz12_img2 = Business_Image(
        business_id=12,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/QFE-_bSfJ9Z5KuWOAXumhQ/o.jpg'
    )
    biz12_img3 = Business_Image(
        business_id=12,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/EuQ0o6tSj8L3WfrenQVoKg/o.jpg'
    )
    biz12_img4 = Business_Image(
        business_id=12,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/AVbclXL4fL6Y8jnF98gGBg/o.jpg'
    )

    biz13_img1 = Business_Image(
        business_id=13,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/1j5WvIr2X89Rb-Z10MP3NQ/o.jpg'
    )
    biz13_img2 = Business_Image(
        business_id=13,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ocxZOvqP3IpI_Q6hLCeeEg/o.jpg'
    )
    biz13_img3 = Business_Image(
        business_id=13,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/q0KYOqmEP5OYTmb-EDzfBg/o.jpg'
    )
    biz13_img4 = Business_Image(
        business_id=13,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/GLjyOeKVPBuxBEU6BIyq7g/o.jpg'
    )

    biz14_img1 = Business_Image(
        business_id=14,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/eVRIwLBXjZlOp2ar7zuhIA/o.jpg'
    )
    biz14_img2 = Business_Image(
        business_id=14,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/lXHABmB4kbilxu2-xURNNA/o.jpg'
    )
    biz14_img3 = Business_Image(
        business_id=14,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/8jsN3YPYmn13SXWYwq2egQ/o.jpg'
    )
    biz14_img4 = Business_Image(
        business_id=14,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/DvmcZQbXggPc2KRKLzfATg/o.jpg'
    )

    biz15_img1 = Business_Image(
        business_id=15,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Xxn0pr4aZZGvOcFY0kGLbA/o.jpg'
    )
    biz15_img2 = Business_Image(
        business_id=15,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/0sake9VZdpLmNyU8Uk8a_g/o.jpg'
    )
    biz15_img3 = Business_Image(
        business_id=15,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/KuDlJWhYLuxENosMfu_rIQ/o.jpg'
    )
    biz15_img4 = Business_Image(
        business_id=15,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/pvUoRHKSFimIH_9SmxDBoA/o.jpg'
    )
    #-------------------tianyi 16-20-------------------------------------
    biz16_img1 = Business_Image(
        business_id=16,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/iOKCfa5Q2nlB9Ao2fcqL5Q/o.jpg'
    )
    biz16_img2 = Business_Image(
        business_id=16,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/g0YFM5QgCxNdCDGEOs7KaQ/o.jpg'
    )
    biz16_img3 = Business_Image(
        business_id=16,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/XpcAo65KkBgRn-hC9zVjwQ/o.jpg'
    )
    biz16_img4 = Business_Image(
        business_id=16,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/09SvSomWD34CD5x-39rpEA/o.jpg'
    )


    biz17_img1 = Business_Image(
        business_id=17,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/sb_zhzdnivm3_30un5DuWQ/o.jpg'
    )
    biz17_img2 = Business_Image(
        business_id=17,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/nesZk6PBvpJPFUpNvSNSGg/o.jpg'
    )
    biz17_img3 = Business_Image(
        business_id=17,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/4JHkw69pHTptr2B9YtJUEQ/o.jpg'
    )
    biz17_img4 = Business_Image(
        business_id=17,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/69NwT4or7SrxYAxAycfa5g/o.jpg'
    )


    biz18_img1 = Business_Image(
        business_id=18,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/MCodBHpMjDB1bf2XmgZQQA/o.jpg'
    )
    biz18_img2 = Business_Image(
        business_id=18,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ckFlyhh_yuYJUfzNkTqqPQ/o.jpg'
    )
    biz18_img3 = Business_Image(
        business_id=18,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/u2LR-sh43Tq1bys-PJ25Xw/o.jpg'
    )
    biz18_img4 = Business_Image(
        business_id=18,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/tqjBkzNCtAgiCiMr6-ZqHQ/o.jpg'
    )


    biz19_img1 = Business_Image(
        business_id=19,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/7X8Jqdl7NDItgNkDiAyIOg/o.jpg'
    )
    biz19_img2 = Business_Image(
        business_id=19,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/JXXmldM1JZF5EKksmcg3Lg/o.jpg'
    )
    biz19_img3 = Business_Image(
        business_id=19,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/A4Dq8qlWTCW1ud-g7y6mXQ/o.jpg'
    )
    biz19_img4 = Business_Image(
        business_id=19,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/ZHE8ds3zj3jqfsEODuj8gA/o.jpg'
    )


    biz20_img1 = Business_Image(
        business_id=20,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Zy7k1WkakyCn-gFiTtG87w/o.jpg'
    )
    biz20_img2 = Business_Image(
        business_id=20,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/4iBSlwNz6NlJGvHv-_hgVw/o.jpg'
    )
    biz20_img3 = Business_Image(
        business_id=20,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/objR-qDUFbI55KjDrU3_PA/o.jpg'
    )
    biz20_img4 = Business_Image(
        business_id=20,
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/PpM6gMpgd_-WFaG16ZZ5qw/o.jpg'
    )







    db.session.add(biz1_img1)
    db.session.add(biz1_img2)
    db.session.add(biz1_img3)
    db.session.add(biz1_img4)

    db.session.add(biz2_img1)
    db.session.add(biz2_img2)
    db.session.add(biz2_img3)
    db.session.add(biz2_img4)

    db.session.add(biz3_img1)
    db.session.add(biz3_img2)
    db.session.add(biz3_img3)
    db.session.add(biz3_img4)

    db.session.add(biz4_img1)
    db.session.add(biz4_img2)
    db.session.add(biz4_img3)
    db.session.add(biz4_img4)

    db.session.add(biz5_img1)
    db.session.add(biz5_img2)
    db.session.add(biz5_img3)
    db.session.add(biz5_img4)

    db.session.add(biz6_img1)
    db.session.add(biz6_img2)
    db.session.add(biz6_img3)
    db.session.add(biz6_img4)

    db.session.add(biz7_img1)
    db.session.add(biz7_img2)
    db.session.add(biz7_img3)
    db.session.add(biz7_img4)

    db.session.add(biz8_img1)
    db.session.add(biz8_img2)
    db.session.add(biz8_img3)
    db.session.add(biz8_img4)

    db.session.add(biz9_img1)
    db.session.add(biz9_img2)
    db.session.add(biz9_img3)
    db.session.add(biz9_img4)

    db.session.add(biz10_img1)
    db.session.add(biz10_img2)
    db.session.add(biz10_img3)
    db.session.add(biz10_img4)

    db.session.add(biz11_img1)
    db.session.add(biz11_img2)
    db.session.add(biz11_img3)
    db.session.add(biz11_img4)

    db.session.add(biz12_img1)
    db.session.add(biz12_img2)
    db.session.add(biz12_img3)
    db.session.add(biz12_img4)

    db.session.add(biz13_img1)
    db.session.add(biz13_img2)
    db.session.add(biz13_img3)
    db.session.add(biz13_img4)

    db.session.add(biz14_img1)
    db.session.add(biz14_img2)
    db.session.add(biz14_img3)
    db.session.add(biz14_img4)

    db.session.add(biz15_img1)
    db.session.add(biz15_img2)
    db.session.add(biz15_img3)
    db.session.add(biz15_img4)

    db.session.add(biz16_img1)
    db.session.add(biz16_img2)
    db.session.add(biz16_img3)
    db.session.add(biz16_img4)

    db.session.add(biz17_img1)
    db.session.add(biz17_img2)
    db.session.add(biz17_img3)
    db.session.add(biz17_img4)

    db.session.add(biz18_img1)
    db.session.add(biz18_img2)
    db.session.add(biz18_img3)
    db.session.add(biz18_img4)

    db.session.add(biz19_img1)
    db.session.add(biz19_img2)
    db.session.add(biz19_img3)
    db.session.add(biz19_img4)

    db.session.add(biz20_img1)
    db.session.add(biz20_img2)
    db.session.add(biz20_img3)
    db.session.add(biz20_img4)

    db.session.commit()

def undo_business_images():
    db.session.execute('TRUNCATE BUSINESS IMAGE RESTART IDENTITY CASCADE;')
    db.session.commit()