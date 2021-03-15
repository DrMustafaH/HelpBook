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

  // get a user from a specific id
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

  // get users from a category id
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

  // get followers count for a specific user id
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

  // get total amount of donations for a specific user id
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
        console.log(totalDonation);
        res.json(totalDonation);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get donations log for a specific user id
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
          ({ id, donor_name, donated_amount, donation_date }) => ({
            id,
            donor_name,
            donated_amount,
            donation_date,
          })
        );
        res.json(mappedDonationLog);
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
