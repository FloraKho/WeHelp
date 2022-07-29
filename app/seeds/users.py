from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',)
    rena = User(
        username='Rena', email='rena@aa.io', password='password', profile_pic='https://preview.redd.it/pxpvfgm6jac81.png?width=1109&format=png&auto=webp&s=9bfdb1a81dc4aecd353b9765b9c6e84119c2b641',)
    flora = User(
        username='Flora', email='flora@aa.io', password='password', profile_pic='https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2015/10/01_ParksBlog_ShellieMay_Logo.jpg',)
    tianyi = User(
        username='Tianyi', email='tianyi@aa.io', password='password', profile_pic='https://avatars.githubusercontent.com/u/75456670?v=4',)
    jackie = User(
        username='Jackie', email='jackie@aa.io', password='password', profile_pic='https://i.pinimg.com/564x/18/70/0e/18700e09d3564cbbcabe7faaf37c15e2.jpg',)
    lawrence = User(
        username='Lawrence', email='lawrence@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',)
    eric = User(
        username='Eric', email='eric@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',)
    allie = User(
        username='Allie', email='allie@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',)
    victoria = User(
        username='Victoria', email='victoria@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1525786210598-d527194d3e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',)
    brandon = User(
        username='Brandon', email='brandon@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1627693685101-687bf0eb1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',)
    ethan = User(
        username='Ethan', email='ethan@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1552321649-f66d87409da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',)
    andrew = User(
        username='Andrew', email='andrew@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',)
    john = User(
        username='John', email='john@aa.io', password='password', profile_pic='https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',)
    
    

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
