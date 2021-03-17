const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all users
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get a user from a specific id
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT id, username, avatar, type_id FROM users
    WHERE id = $1
    ;`,
      [req.params.id]
    )
      .then((data) => {
        const users = data.rows;
        res.json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get users from a category id
  router.get("/category/:id", (req, res) => {
    db.query(
      `SELECT * FROM users
    WHERE category_id = $1
    ;`,
      [req.params.id]
    )
      .then((data) => {
        const users = data.rows;
        const mappedUsers = users.map(
          ({ id, username, type_id, avatar, category_id }) => ({
            id,
            username,
            type_id,
            avatar,
            category_id,
          })
        );
        res.json(mappedUsers);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get followers count for a specific user id
  router.get("/followers/:id", (req, res) => {
    db.query(
      `SELECT count(*) FROM receiver_followers
    WHERE user_id = $1
    ;`,
      [req.params.id]
    )
      .then((data) => {
        const followersCount = data.rows[0];
        res.json(followersCount.count);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get following receivers for a specific user id (donor)
  router.get("/following/:id", (req, res) => {
    db.query(
      `SELECT
      donor_following.id, receiver_id as followed_user_id, user_id as user, users.username as followed_userName, users.avatar as followed_avatar
      FROM donor_following 
      JOIN users ON users.id = receiver_id
      WHERE user_id = $1;`,
      [req.params.id]
    )
      .then((data) => {
        const followingList = data.rows;
        res.json(followingList);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get total amount of donations for a specific user id
  router.get("/total_donation/:id", (req, res) => {
    db.query(
      `SELECT requested_money.* , donated_money.requested_money_id as requested_money_id, sum(donated_money.donated_amount) FROM requested_money
      JOIN donated_money on donated_money.requested_money_id = requested_money.id
      WHERE requested_money.user_id = $1
      GROUP BY requested_money.id, donated_money.requested_money_id;`,
      [req.params.id]
    )
      .then((data) => {
        const totalDonation = data.rows[0];
        res.json(totalDonation);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get donations log for a specific user id
  router.get("/donationLog/:id", (req, res) => {
    db.query(
      `SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as donor_name FROM donated_money
      JOIN requested_money on requested_money.id = donated_money.requested_money_id
      JOIN users on donated_money.user_id = users.id
      WHERE requested_money.user_id = $1
      GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id;`,
      [req.params.id]
    )
      .then((data) => {
        const donationLog = data.rows;
        const mappedDonationLog = donationLog.map(
          ({ id, donor_name, donated_amount }) => ({
            id,
            donor_name,
            donated_amount,
          })
        );
        res.json(mappedDonationLog);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get wishlist items donations log for a specific user id
  router.get("/wishlistDonationLog/:id", (req, res) => {
    db.query(
      `SELECT items_wishlist.id, items_wishlist.item_name, donor_id, is_active, donated_date, items_wishlist.user_id, users.username as item_donor_name FROM items_wishlist
      JOIN users on items_wishlist.donor_id = users.id
      WHERE items_wishlist.user_id = $1
      GROUP BY items_wishlist.id, users.id;`,
      [req.params.id]
    )
      .then((data) => {
        const wishlistDonationLog = data.rows;
        const mappedwishlistDonationLog = wishlistDonationLog.map(
          ({ id, item_name, item_donor_name }) => ({
            id,
            item_name,
            item_donor_name,
          })
        );
        res.json(mappedwishlistDonationLog);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING deletes an item from the database (donor_following table)
  router.post("/following/:id/delete", (req, res) => {
    db.query(
      `DELETE FROM donor_following
    WHERE id = $1
    RETURNING *;`,
      [req.body.id]
    )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Adds a new user to the database
  router.post("/", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const type_id = req.body.type_id;
    const avatar = req.body.avatar;
    const category_id = req.body.category_id;

    db.query(
      `
    INSERT INTO users
    (
      username,
      email,
      password,
      type_id,
      avatar,
      category_id
    )
    VALUES
    ($1, $2, $3, $4, $5, $6);
    `,
      [username, email, password, type_id, avatar, category_id]
    )
      .then(() => {
        res.status(201);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
