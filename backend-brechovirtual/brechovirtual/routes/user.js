const User = require("../models/User");
const express = require("express");
const passport = require("passport-local-mongoose");
var router = express.Router();
var authenticate = require("../auth");

router.route("/login").post((req, res, next) => {});
router.get("/logout", (req, res, next) => {});

router.get("/signup", (req, res, next) => {
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
        } else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
                res.redirect('/'); //redireciona para a página principal
            });
        }
    });
});

modules.exports = router;





