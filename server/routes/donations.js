const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const app = express();

// middleware to check if a token is there in the header
app.use(function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "No credentials sent!" });
  }
  next();
});

module.exports = (db) => {
  /////// DONORS ROUTES /////

  // get all donated money
  // router.get("/donor", (req, res) => {
  //   db.query(`SELECT * FROM donated_money;`)
  //     .then((data) => {
  //       const donated_money = data.rows;
  //       res.json({ donated_money });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // get a donor from a specific id
  // router.get("/donor/:id", (req, res) => {
  //   db.query(
  //     `SELECT * FROM donated_money
  //   WHERE user_id = $1
  //   ;`,
  //     [req.params.id]
  //   )
  //     .then((data) => {
  //       const donated_money_id = data.rows;
  //       res.json({ donated_money_id });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  /////// RECEIVERS ROUTES//////

  // get all requested money
  // router.get("/receiver", (req, res) => {
  //   db.query(`SELECT * FROM requested_money;`)
  //     .then((data) => {
  //       const requested_money = data.rows;
  //       res.json({ requested_money });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // get a receiver from a specific id
  // router.get("/receiver/:id", (req, res) => {
  //   db.query(
  //     `SELECT * FROM requested_money
  //     WHERE user_id = $1
  //     ;`,
  //     [req.params.id]
  //   )
  //     .then((data) => {
  //       const requested_money_id = data.rows;
  //       res.json({ requested_money_id });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // get total amount donated to a specific receiver
  // router.get("/receiver/total/:id", (req, res) => {
  //   db.query(
  //     `SELECT SUM(donated_amount) as total_donated , requested_money.user_id as receiver_id FROM donated_money JOIN requested_money ON requested_money_id = requested_money.id WHERE requested_money.id = $1 GROUP BY requested_money.user_id;`,
  //     [req.params.id]
  //   )
  //     .then((data) => {
  //       const total_donations = data.rows;
  //       res.json({ total_donations });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // USING add a donation to donated_money and then get total amount donated to a specific receiver
  router.post("/donor/:id/new", (req, res) => {
    const user_id = req.body.user_id;
    const donation_date = req.body.donation_date;
    const donated_amount = req.body.donated_amount;
    const requested_money_id = req.body.requested_money_id;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // if the token contains the authenticated user information
    if (decoded.userId && decoded.typeId === 1) {
      // allow user(donor) to add a donation
      db.query(
        `INSERT INTO donated_money(user_id,
        donation_date,
        donated_amount, 
        requested_money_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [user_id, donation_date, donated_amount, requested_money_id]
      )
        .then((data) => {
          const newDonation = data.rows[0];
          res.send(newDonation);
          res.status(201);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  // USING Add a new donation amount/target in database (by actually updating a single entry as each receiver can ask for 1 donation goal at a specific time period)
  router.post("/receiver/:id/add", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // if the token contains the authenticated user information
    if (decoded.userId == req.params.id && decoded.typeId === 2) {
      // allow user (receiver organization) to add a new donation goal
      db.query(
        `
      UPDATE requested_money
      SET requested_amount = $1 WHERE id = $2 RETURNING *;
        `,
        [req.body.requested_amount, req.body.id]
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

  //USING edit requested donation amount
  router.post("/receiver/:id/edit", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // if the token contains the authenticated user information
    if (
      decoded.userId == req.params.id &&
      (decoded.typeId === 2 || decoded.typeId === 3)
    ) {
      // allow user (receiver organization) to edit a donation goal
      db.query(
        `UPDATE requested_money
          SET requested_amount = $1 WHERE id = $2 RETURNING *;`,
        [req.body.requested_amount, req.body.id]
      )
        .then((data) => {
          console.log("Data", data.rows[0]);
          res.send(data.rows[0]);
          res.status(200);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  return router;
};
