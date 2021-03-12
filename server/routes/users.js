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
      `SELECT * FROM users
    WHERE id = $1
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
