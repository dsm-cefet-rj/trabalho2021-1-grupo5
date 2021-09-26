const User = require("../models/User");
const express = require("express");
const passport = require("passport-local-mongoose");
var router = express.Router();
var authenticate = require("../auth");

router.route("/login").post((req, res, next) => {});
router.get("/logout", (req, res, next) => {});
router.get("/signup", (req, res, next) => {});

modules.exports = router;
