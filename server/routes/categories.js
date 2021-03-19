const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const app = express();

// middleware to check if a token is there in the header
// app.use(function (req, res, next) {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ error: "No credentials sent!" });
//   }
//   next();
// });

module.exports = (db) => {
  // USING get all categories
  router.get("/", (req, res) => {
    // allow user(donor) to unfollow another user (recevier)
    db.query(`SELECT * FROM categories;`)
      .then((data) => {
        const categories = data.rows;
        res.json(categories);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // }
  });
  return router;
};
