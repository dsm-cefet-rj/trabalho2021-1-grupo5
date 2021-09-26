const User = require("../models/User");
const express = require("express");
const passport = require("passport-local-mongoose");
var router = express.Router();
var authenticate = require("../auth");

router.use(bodyParser.json());

router.post("/login", passport.authenticate('local'), (req, res, next) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
    res.redirect('/');
});


router.get("/logout", (req, res, next) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
      }
      else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
      }
});



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





