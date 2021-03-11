const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /////// DONORS ROUTES /////

  // get all donated money
  router.get("/donor", (req, res) => {
    db.query(`SELECT * FROM donated_money;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get a donor from a specific id
  router.get("/donor/:id", (req, res) => {
    db.query(
      `SELECT * FROM donated_money
    WHERE user_id = $1
    ;`,
      [req.params.id]
    )
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /////// RECEIVERS ROUTES//////

  // get all requested money
  router.get("/receiver", (req, res) => {
    db.query(`SELECT * FROM requested_money;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get a receiver from a specific id
  router.get("/receiver/:id", (req, res) => {
    db.query(
      `SELECT * FROM requested_money
      WHERE user_id = $1
      ;`,
      [req.params.id]
    )
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get total amount donated to a specific receiver
  router.get("/receiver/total/:id", (req, res) => {
    db.query(
      `SELECT SUM(donated_amount) as total_donated , requested_money.user_id as receiver_id FROM donated_money JOIN requested_money ON requested_money_id = requested_money.id WHERE requested_money.id = $1 GROUP BY requested_money.user_id;`,
      [req.params.id]
    )
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Set a donation amount/target in database
  router.post("/receiver", (req, res) => {
    const user_id = req.params.id;
    const is_active = true;
    const requested_amount = req.body.requested_amount;

    db.query(
      `
        INSERT INTO requested_money
        (user_id, is_active, requested_amount)
        VALUES
        ($1, $2, $3);
        `,
      [user_id, is_active, requested_amount]
    )
      .then((data) => {
        const todos = data.rows;
        res.json({ todos });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //edit requested donation amount
  router.post("/receiver/edit", (req, res) => {
    db.query(
      `UPDATE requested_money
          SET requested_amount = $1, WHERE id = $2;`,
      [req.body.requested_amount, req.body.id]
    )
      .then((data) => {
        const todos = data.rows;
        res.json({ todos });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
