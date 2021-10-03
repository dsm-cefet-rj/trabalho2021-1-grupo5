const User = require("../models/User");
const express = require("express");
const passport = require("passport");
var router = express.Router();
var authenticate = require("../auth");
var bodyParser = require("body-parser");
const { corsWithOptions } = require("./cors");

router.use(bodyParser.json());

router.post(
  "/login",
  corsWithOptions,
  passport.authenticate("local"),
  (req, res, next) => {
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      token: token,
      status: "You are successfully logged in!",
    });
    res.redirect("/");
  }
);

router.get("/logout", (req, res, next) => {
  res.clearCookie("jwt");
  res.cookie("jwt", "", { maxAge: 1 });
  req.logout();
  res.redirect("/");
});

router.post("/signup", corsWithOptions, (req, res, next) => {
  console.log(req.body);
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
          res.redirect("/"); //redireciona para a página principal
        });
      }
    }
  );
});

module.exports = router;
