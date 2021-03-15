-- Get total amount of donation moneey and requested monay by user id
-- SELECT requested_money.* , donated_money.requested_money_id as requested_money_id, sum(donated_money.donated_amount) FROM requested_money
-- FULL OUTER JOIN donated_money on donated_money.requested_money_id = requested_money.id
-- WHERE requested_money.user_id = 17
-- GROUP BY requested_money.id, donated_money.requested_money_id;


SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as donor_name FROM donated_money
JOIN requested_money on requested_money.id = donated_money.requested_money_id
JOIN users on donated_money.user_id = users.id
WHERE requested_money.user_id = 22
GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id;
