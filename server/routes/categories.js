const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all categories
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
