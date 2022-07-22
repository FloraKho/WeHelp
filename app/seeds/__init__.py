from flask.cli import AppGroup
from .users import seed_users, undo_users
from .business import seed_businesses, undo_businesses
from .business_image import seed_business_images, undo_business_images
from .review import seed_reviews, undo_reviews
from .category import seed_categories, undo_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_categories()
    seed_businesses()
    seed_business_images()
    seed_reviews()




# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_categories()
    undo_businesses()
    undo_business_images()
    undo_reviews()

