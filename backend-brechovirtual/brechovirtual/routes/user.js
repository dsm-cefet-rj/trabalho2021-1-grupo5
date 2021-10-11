const User = require("../models/User");
const express = require("express");
const passport = require("passport");
var router = express.Router();
var authenticate = require("../auth");
const { corsWithOptions } = require("./cors");

router.post(
  "/login",
  corsWithOptions,
  passport.authenticate("local"),
  (req, res, next) => {
    var token = authenticate.getToken({ _id: req.user._id });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      id: req.user._id,
      token: token
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
  User.register(
    new User({ username: req.body.userName, name: req.body.name }),
    req.body.password,
    (err, user) => {
      if (err) {
        print(err)
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
      }
    }
  );
});

module.exports = router;
