const dotenv = require("dotenv");
dotenv.config();

const session = require('express-session');

const express = require("express");

const router = require("./src/router");

const app = express();

const loggedInUserMiddleware = require("./src/middlewares/loggedInUser");

const { notFound } = require ('./src/middlewares/notFound');

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(loggedInUserMiddleware);

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
