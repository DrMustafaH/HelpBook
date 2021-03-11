const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all items wishlist
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM items_wishlist;`)
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
