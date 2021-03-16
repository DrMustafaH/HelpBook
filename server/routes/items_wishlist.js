const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // get all items wishlist
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM items_wishlist;`)
      .then((data) => {
        const items_wishlist = data.rows;
        res.json({ items_wishlist });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // retrieves all the items wishlist from a user id
  router.get("/:id", (req, res) => {
    db.query(
      `SELECT * FROM items_wishlist
    WHERE user_id = $1 AND is_active = TRUE
    ORDER BY entry_date ASC;`,
      [req.params.id]
    )
      .then((data) => {
        const items_wishlist_id = data.rows;
        res.json(items_wishlist_id);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING Adds a new item to the wishlist in database
  router.post("/:id/add", (req, res) => {
    const user_id = req.params.id;
    const category_id = req.body.category;
    const item_name = req.body.itemName;
    const is_active = true;
    const entry_date = new Date();
    const donated_date = null;
    const quantity = req.body.quantity;
    const donor_id = null;

    db.query(
      `INSERT INTO items_wishlist
    (
      user_id,
      category_id,
      item_name,
      is_active,
      entry_date,
      donated_date,
      quantity,
      donor_id
    )
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
    `,
      [
        user_id,
        category_id,
        item_name,
        is_active,
        entry_date,
        donated_date,
        quantity,
        donor_id,
      ]
    )
      .then((data) => {
        res.send(data.rows[0]);
        res.status(201);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // USING deletes an item from the database (wishlist table)
  router.post("/:id/delete", (req, res) => {
    console.log("WE ARE HERE", req.body);
    db.query(
      `DELETE FROM items_wishlist
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
  });

  //edit a item from the wishlist table in database
  router.post("/edit", (req, res) => {
    db.query(
      `UPDATE items_wishlist
    SET item_name = $1, quantity = $2, category_id = $3 WHERE id = $4;`,
      [req.body.item_name, req.body.quantity, req.body.category_id, req.body.id]
    )
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });

  // marks a item as inactive/donated
  router.post("/donated", (req, res) => {
    db.query(
      `UPDATE items_wishlist SET is_active = FALSE
      WHERE id = $1`,
      [req.body.id]
    )
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
