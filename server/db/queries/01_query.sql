SELECT requested_money.* , donated_money.requested_money_id as requested_money_id, sum(donated_money.donated_amount) FROM requested_money
JOIN donated_money on donated_money.requested_money_id = requested_money.id
WHERE requested_money.user_id = 2
GROUP BY requested_money.id, donated_money.requested_money_id;