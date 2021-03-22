-- Get total amount of donation moneey and requested monay by user id
-- SELECT requested_money.* , donated_money.requested_money_id as requested_money_id, sum(donated_money.donated_amount) FROM requested_money
-- FULL OUTER JOIN donated_money on donated_money.requested_money_id = requested_money.id
-- WHERE requested_money.user_id = 17
-- GROUP BY requested_money.id, donated_money.requested_money_id;
-- -- Get donation money log from user id
-- SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as donor_name FROM donated_money
--       JOIN requested_money on requested_money.id = donated_money.requested_money_id
--       JOIN users on donated_money.user_id = users.id
--       WHERE requested_money.user_id = 2
--       GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id;
-- -- get wishlist item donated to user id
-- SELECT items_wishlist.id, items_wishlist.item_name, donor_id, is_active, donated_date, items_wishlist.user_id, users.username as item_donor_name FROM items_wishlist
--       JOIN users on items_wishlist.donor_id = users.id
--       WHERE items_wishlist.user_id = 2
--       GROUP BY items_wishlist.id, users.id;
-- -- Get users that are being followed by especific user id
-- SELECT
--       donor_following.id, receiver_id as followed_user_id, user_id as user, users.username as followed_userName, users.avatar as followed_avatar
-- FROM
--       donor_following 
--       JOIN users ON users.id = receiver_id
-- WHERE
--       user_id = 1;
-- Get activity of donated amounts from a especific user id
-- SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as receiver_name FROM donated_money
-- JOIN requested_money on requested_money.id = donated_money.requested_money_id
-- JOIN users on requested_money.user_id = users.id
-- WHERE donated_money.user_id = 50
-- GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id;        
-- SELECT
--   users.*,
--   donated_items.donor_id as donor_id,
--   donated_items.receiver_id as receiver_id,
--   items_wishlist.item_name as item_name
-- FROM
--   users
--   JOIN donated_items on donated_items.donor_id = users.id
--   JOIN items_wishlist on items_wishlist.id = users.id
-- WHERE
--   users.id = 5
-- GROUP BY
--   users.id,
--   donated_items.donor_id,
--   donated_items.receiver_id,
--   items_wishlist.item_name;
SELECT
  donated_items.*,
  users.username as donor_name,
  items_wishlist.item_name as item_name (
    SELECT
      donated_items.*,
      users.username as receiver_name,
      items_wishlist.item_name as item_name
    FROM
      donated_items
      JOIN users on users.id = donated_items.receiver_id
      JOIN items_wishlist on items_wishlist.id = donated_items.wishlist_item_id
  )
FROM
  donated_items
  JOIN users on users.id = donated_items.donor_id
  JOIN items_wishlist on items_wishlist.id = donated_items.wishlist_item_id
WHERE
  users.id = 10;

-- SELECT
--   donated_items.*,
--   users.username as receiver_name,
--   items_wishlist.item_name as item_name
-- FROM
--   donated_items
--   JOIN users on users.id = donated_items.receiver_id
--   JOIN items_wishlist on items_wishlist.id = donated_items.wishlist_item_id
-- WHERE
--   users.id = 5;
-- select
--   users.username as donorName,
--   users.username as receiverName
-- from
--   users
--   join donated_items on donated_items.receiver_id = users.id
--   join items_wishlist on items_wishlist.donor_id = users.id;