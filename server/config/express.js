const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const express = require("express");

module.exports = (app) => {
  /* if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
  } */
  app.use(express.static("client/build"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(cors());
  console.log("Express ready!");
};
