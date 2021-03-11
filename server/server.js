// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
// const cookieSession = require('cookie-session');
// const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

//app uses
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));

const usersRoutes = require("./routes/users");
const itemsWishlistsRoutes = require("./routes/items_wishlist");
// const loginRoutes = require("./routes/login");
// const categoriesRoutes = require("./routes/categoriesRoutes");
// const logoutRoutes = require("./routes/logout");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/wishlist", itemsWishlistsRoutes(db));
// app.use("/login", loginRoutes(db));
// app.use("/api/categories", categoriesRoutes(db));
// app.use("/logout", logoutRoutes(db));

app.get("/", (req, res) => {
  // res.render("index");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
