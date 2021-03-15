-- Get total amount of donation moneey and requested monay by user id
-- SELECT requested_money.* , donated_money.requested_money_id as requested_money_id, sum(donated_money.donated_amount) FROM requested_money
-- FULL OUTER JOIN donated_money on donated_money.requested_money_id = requested_money.id
-- WHERE requested_money.user_id = 17
-- GROUP BY requested_money.id, donated_money.requested_money_id;

-- Get donation money log from user id
SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as donor_name FROM donated_money
      JOIN requested_money on requested_money.id = donated_money.requested_money_id
      JOIN users on donated_money.user_id = users.id
      WHERE requested_money.user_id = 2
      GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id;


-- get wishlist item donated to user id
SELECT items_wishlist.id, items_wishlist.item_name, donor_id, is_active, donated_date, items_wishlist.user_id, users.username as item_donor_name FROM items_wishlist
      JOIN users on items_wishlist.donor_id = users.id
      WHERE items_wishlist.user_id = 2
      GROUP BY items_wishlist.id, users.id;