const User = require("../models/User");
const express = require("express");
const passport = require("passport");
var router = express.Router();
var authenticate = require("../auth");
const { corsWithOptions } = require("./cors");


router.post('/login', corsWithOptions, (req, res, next) => {
  console.log(req.body)  


  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }

      var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ id: req.user._id, token: token});
    }); 
  }) (req, res, next);

});


router.get("/logout", (req, res, next) => {
  res.status(200).setHeader("Content-Type","application/json").json({})
});

router.post("/signup", corsWithOptions, (req, res, next) => {
  User.register(
    new User({ username: req.body.userName, name: req.body.name }),
    req.body.password,
    (err, user) => {
      if (err) {
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
