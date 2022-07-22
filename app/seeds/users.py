from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    rena = User(
        username='Rena', email='rena@aa.io', password='password')
    flora = User(
        username='Flora', email='flora@aa.io', password='password')
    tianyi = User(
        username='Tianyi', email='tianyi@aa.io', password='password')
    jackie = User(
        username='Jackie', email='jackie@aa.io', password='password')
    lawrence = User(
        username='Lawrence', email='lawrence@aa.io', password='password')
    eric = User(
        username='Eric', email='eric@aa.io', password='password')
    allie = User(
        username='Allie', email='allie@aa.io', password='password')
    victoria = User(
        username='Victoria', email='victoria@aa.io', password='password')
    brandon = User(
        username='Brandon', email='brandon@aa.io', password='password')
    ethan = User(
        username='Ethan', email='ethan@aa.io', password='password')
    andrew = User(
        username='Andrew', email='andrew@aa.io', password='password')
    john = User(
        username='John', email='john@aa.io', password='password')
    
    

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(rena)
    db.session.add(flora)
    db.session.add(tianyi)
    db.session.add(jackie)
    db.session.add(lawrence)
    db.session.add(eric)
    db.session.add(allie)
    db.session.add(victoria)
    db.session.add(brandon)
    db.session.add(ethan)
    db.session.add(andrew)
    db.session.add(john)
    


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
