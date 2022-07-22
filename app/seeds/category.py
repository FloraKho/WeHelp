from app.models import db, Category

def seed_category():
    chinese=Category(name='Chinese')
    korean=Category(name='Korean')
    japanese=Category(name='Japanese')
    thai=Category(name='Thai')
    vietnamese=Category(name='Vietnamese')
    mexican=Category(name='Mexican')
    italian=Category(name='Italian')
    coffee_tea=Category(name='Coffee & Tea')
    breakfast_brunch=Category(name='Breakfast & Brunch')
    

    db.session.add(chinese)
    db.session.add(korean)
    db.session.add(japanese)
    db.session.add(thai)
    db.session.add(vietnamese)
    db.session.add(mexican)
    db.session.add(italian)
    db.session.add(coffee_tea)
    db.session.add(breakfast_brunch)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE CATEGORIES RESTART IDENTITY CASCADE;')
    db.session.commit()