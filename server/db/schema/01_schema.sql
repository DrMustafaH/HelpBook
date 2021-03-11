DROP TABLE IF EXISTS request_volunteer CASCADE;

DROP TABLE IF EXISTS items_wishlist CASCADE;

DROP TABLE IF EXISTS requested_money CASCADE;

DROP TABLE IF EXISTS donated_money CASCADE;

DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS types CASCADE;

DROP TABLE IF EXISTS categories CASCADE;

-- This the first table should be created
CREATE TABLE types (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- This is second table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- 3rd
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  type_id INTEGER REFERENCES types(id) ON DELETE CASCADE,
  avatar TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

-- forth
CREATE TABLE request_volunteer (
  id SERIAL PRIMARY KEY NOT NULL,
  volunteer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  requestor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  title VARCHAR(255) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL
);

-- fifth
CREATE TABLE items_wishlist (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  item_name VARCHAR(255) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  entry_date TIMESTAMP,
  donated_date TIMESTAMP DEFAULT NULL,
  quantity INTEGER NOT NULL
);

-- sixth
CREATE TABLE requested_money (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  requested_amount INTEGER
);

-- seventh
CREATE TABLE donated_money (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  donation_date DATE,
  donated_amount INTEGER,
  requested_money_id INTEGER
);