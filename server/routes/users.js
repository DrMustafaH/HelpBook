const express = require("express");
const router = express.Router();
module.exports = (db) => {
  console.log("HELLO");
  // get all users
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
        console.log("HELLO", users);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
