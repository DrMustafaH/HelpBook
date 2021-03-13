const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all types
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM types;`)
      .then((data) => {
        const types = data.rows;
        res.json({ types });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
