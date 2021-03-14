-- seeds for types table
INSERT INTO
  types (name)
VALUES
  ('donor'),
  ('receiver_organization'),
  ('receiver_individual');

-- seeds for categories table
INSERT INTO
  categories (name)
VALUES
  ('Health'),
  ('Food Banks'),
  ('Immigration & Refugees'),
  ('Education'),
  ('Animals'),
  ('Kids'),
  ('Women'),
  ('Others');

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
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=robohash&r=x',
    1
  ),
  (
    'share food bank',
    'sfb@example.com',
    'password',
    2,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x',
    2
  ),
  (
    'JoeD',
    'joe@example.com',
    'password',
    1,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=monsterid&r=x',
    null
  ),
  (
    'MrDave',
    'dave@example.com',
    'password',
    3,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x',
    1
  );

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
    'Need some help in cleaning the lawn and planting it together, it is a big lawn',
    'Lawn work',
    '03-06-2020',
    '03-06-2020',
    '08:00:00',
    '11:00:00',
    TRUE,
    5
  ),
  (
    4,
    'Need some help to move in to a new home and it will be having some heavy lifting',
    'Moving help',
    '10-02-2020',
    '10-02-2020',
    '08:00:00',
    '15:00:00',
    TRUE,
    5
  ),
  (
    4,
    'Need a person to help in a food distribution week for the community of Burnaby and it will be for 4 days',
    'Food Bank help',
    '10-05-2020',
    '10-08-2020',
    '09:00:00',
    '14:00:00',
    TRUE,
    3
  ),
  (
    1,
    'We need help in community vaccination day, you will not vaccinate but will help in organizing the patients and other related chores',
    'Community Vaccine Day',
    '03-31-2021',
    '03-31-2021',
    '08:00:00',
    '09:00:00',
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
    donated_date,
    quantity
  )
VALUES
  (2, 5, 'Dog food', TRUE, '12-15-2020', null, 3),
  (2, 5, 'Puppy pads', TRUE, '12-15-2020', null, 10),
  (3, 2, 'Rice bags', TRUE, '01-20-2021', null, 3),
  (
    3,
    2,
    'Canned beans',
    TRUE,
    '01-25-2021',
    null,
    5
  ),
  (5, 6, 'Markers', TRUE, '03-02-2021', null, 10),
  (5, 6, 'Note pads', TRUE, '03-02-2021', null, 10),
  (5, 6, 'Scissors', TRUE, '05-02-2021', null, 2);

-- seeds for requested money table
INSERT INTO
  requested_money (user_id, is_active, requested_amount)
VALUES
  (2, TRUE, 1000),
  (3, TRUE, 500);

-- seeds for donated money table
INSERT INTO
  donated_money (
    user_id,
    donation_date,
    donated_amount,
    requested_money_id
  )
VALUES
  (1, '06-03-2020', 100, 1),
  (4, '06-20-2020', 250, 1),
  (1, '09-15-2020', 300, 2);