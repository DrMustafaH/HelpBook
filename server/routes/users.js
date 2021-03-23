const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const app = express();

// middleware to check if a token is there in the header
const authorize = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No credentials sent!" });
  }
  next();
};
module.exports = (db) => {
  // USING get all users
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get a user from a specific id - used for the TOKEN authentication within client side -
  router.post("/fetchUser", (req, res) => {
    db.query(
      `SELECT id , type_id FROM users
    WHERE email = $1
    ;`,
      [req.body.username]
    )
      .then((data) => {
        const user = data.rows[0];
        res.send(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get a user from a specific id
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT * FROM users
    WHERE id = $1
    ;`,
      [req.params.id]
    )
      .then((data) => {
        const user = data.rows[0];
        res.send(user);
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
      `SELECT count(receiver_followers.user_id)  FROM donor_following
      JOIN receiver_followers ON receiver_followers.id = donor_following.receiver_id
    WHERE receiver_id = $1
    
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
      WHERE requested_money.user_id = $1 AND donated_amount != 0
      GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id ORDER BY donated_money.donation_date DESC;`,
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

  // USING deletes an following user (item) from the database (donor_following table)
  router.post("/following/:id/delete", authorize, (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // if the token contains the authenticated user information
    if (decoded.userId == req.params.id && decoded.typeId === 1) {
      // allow user(donor) to unfollow another user (recevier)
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
    }
  });

  // USING adds a following user (item) to the database (donor_following table)
  router.post("/following/:id/add", authorize, (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // if the token contains the authenticated user information
    if (decoded.userId == req.body.user_id && decoded.typeId === 1) {
      // allow user(donor) to unfollow another user (recevier)
      db.query(
        `INSERT INTO donor_following (user_id, receiver_id) VALUES ($1, $2)
    RETURNING *;`,
        [req.body.user_id, req.params.id]
      )
        .then((data) => {
          res.send(data.rows[0]);
          res.status(201);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  // USING get donations Activity log in donor profile for a specific user id
  router.get("/activityMoneyLog/:id", (req, res) => {
    db.query(
      `SELECT donated_money.* , requested_money.user_id as receiver_id, users.username as receiver_name FROM donated_money
        JOIN requested_money on requested_money.id = donated_money.requested_money_id
        JOIN users on requested_money.user_id = users.id
        WHERE donated_money.user_id = $1
        GROUP BY requested_money.id, donated_money.requested_money_id, users.id, donated_money.id ORDER BY donation_date DESC;`,
      [req.params.id]
    )
      .then((data) => {
        const activityMoneyLog = data.rows;
        const mappedActivityMoneyLog = activityMoneyLog.map(
          ({ id, donated_amount, receiver_name }) => ({
            id,
            receiver_name,
            donated_amount,
          })
        );
        res.json(mappedActivityMoneyLog);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING get wishlist items donated activity feed by a specific user
  router.get("/wishlistActivityLog/:id", (req, res) => {
    db.query(
      `SELECT items_wishlist.id, items_wishlist.item_name, donor_id as receiver, is_active, donated_date, items_wishlist.user_id, users.username as item_receiver FROM items_wishlist
      JOIN users on items_wishlist.donor_id = users.id
      WHERE items_wishlist.user_id = $1
      GROUP BY items_wishlist.id, users.id;`,
      [req.params.id]
    )
      .then((data) => {
        const wishlistActivityLog = data.rows;
        const mappedWishlistActivityLog = wishlistActivityLog.map(
          ({ id, item_name, item_receiver }) => ({
            id,
            item_name,
            item_receiver,
          })
        );
        res.json(mappedWishlistActivityLog);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Adds a new user to the database
  // router.post("/", (req, res) => {
  //   const username = req.body.username;
  //   const email = req.body.email;
  //   const password = req.body.password;
  //   const type_id = req.body.type_id;
  //   const avatar = req.body.avatar;
  //   const category_id = req.body.category_id;

  //   db.query(
  //     `
  //   INSERT INTO users
  //   (
  //     username,
  //     email,
  //     password,
  //     type_id,
  //     avatar,
  //     category_id
  //   )
  //   VALUES
  //   ($1, $2, $3, $4, $5, $6);
  //   `,
  //     [username, email, password, type_id, avatar, category_id]
  //   )
  //     .then(() => {
  //       res.status(201);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  return router;
};
