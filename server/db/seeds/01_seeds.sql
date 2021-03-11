-- seeds for users table
INSERT INTO
  users (
    username,
    email,
    password,
    type_id,
    avatar,
    category_id
  )
VALUES
  (
    'helloWorld',
    'hello@world.com',
    'helloworld',
    1,
    'https://avatars.dicebear.com/v2/female/f3f1f083c911e25d5350659901780358.svg',
    2
  ),
  (
    'World Heath Organization',
    'who@example.com',
    'password',
    2,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=robohash&r=x'
  ),
  (
    'share food bank',
    'sfb@example.com',
    'password',
    2,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x'
  ),
  (
    'JoeD',
    'joe@example.com',
    'password',
    1,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=monsterid&r=x'
  ) (
    'MrDave',
    'dave@example.com',
    'password',
    3,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x',
    1
  );

-- seeds for categories table
INSERT INTO
  categories (category_name)
VALUES
  ('Health'),
  ('Food Banks'),
  ('Immigration & Refugees'),
  ('Education'),
  ('Animals'),
  ('Kids'),
  ('Women'),
  ('Others');

-- seeds for types table
INSERT INTO
  types (type_name)
VALUES
  ('donor'),
  ('receiver_organization'),
  ('receiver_individual');

-- seeds for requested money table
INSERT INTO
  requested_money (users_id, is_active, requested_amount)
VALUES
  (2, TRUE, 1000),
  (3, TRUE, 500);

-- seeds for donated money table
INSERT INTO
  donated_money (
    users_id,
    donation_date,
    donated_amount,
    requested_money_id
  )
VALUES
  (1, "06-03-2020", 100, 1),
  (4, "20-06-2020", 250, 1),
  (1, "15-09-2020", 300, 2);

-- seeds for request volunteer table
INSERT INTO
  request_volunteer (
    volunteer_id,
    description,
    title,
    start_date,
    end_date,
    start_time,
    end_time,
    is_active,
    requestor_id
  )
VALUES
  (
    1,
    "Need some help in cleaning the lawn and planting it together, it is a big lawn",
    "Lawn work",
    "06-03-2020",
    "06-03-2020",
    "08:00:00",
    "11:00:00",
    TRUE,
    5
  ),
  (
    4,
    "Need some help to move in to a new home and it will be having some heavy lifting",
    "Moving help",
    "02-10-2020",
    "02-10-2020",
    "08:00:00",
    "15:00:00",
    TRUE,
    5
  ),
  (
    4,
    "Need a person to help in a food distribution week for the community of Burnaby and it will be for 4 days",
    "Food Bank help",
    "05-10-2020",
    "08-10-2020",
    "09:00:00",
    "14:00:00",
    TRUE,
    3
  ),
  (
    1,
    "We need help in community vaccination day, you will not vaccinate but will help in organizing the patients and other related chores",
    "Community Vaccine Day",
    "31-03-2021",
    "31-03-2021",
    "08:00:00",
    "09:00:00",
    TRUE,
    2
  );

-- seeds for items wishlist table
INSERT INTO
  items_wishlist (
    user_id,
    category_id,
    item_name,
    is_active,
    entry_date,
    donated_date
  )
VALUES
  (2, 5, "Dog food", false, "15-12-2020"),
  (2, 5, "Puppy pads", false, "15-12-2020"),
  (3, 2, "Rice bags", false, "20-01-2021"),
  (3, 2, "Canned beans", false, "25-01-2021"),
  (5, 6, "Markers", false, "03-02-2021"),
  (5, 6, "Note pads", false, "03-02-2021"),
  (5, 6, "Scissors", false, "05-02-2021"),
;