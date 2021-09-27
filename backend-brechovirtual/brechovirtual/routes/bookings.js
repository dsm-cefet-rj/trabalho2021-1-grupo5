const { response } = require("express");
var express = require("express");
const Booking = require("../models/Booking");
var router = express.Router();
var authenticate = require("../auth");

//TODO: Verificar as regras de negocio

router.route("/").get(authenticate.verifyUser, async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const bookings = await Booking.find();
    if (bookings != null) {
      res.statusCode = 200;
      res.json(bookings);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (err) {
    res.statusCode = 404;
    res.json({});
  }
});

router.route("/:id").get(async (req, res, next) => {
  let id = req.params.id;
  res.setHeader("Content-Type", "application/json");
  try {
    let booking = await Booking.findById(id).maxTimeMS(5000);
    if (booking != null) {
      res.statusCode = 200;
      res.json(booking);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (error) {
    res.statusCode = 404;
    res.json({});
  }
});
router.route("/:id").delete(authenticate.verifyUser, (req, res) => {
  let id = req.params.id;
  Booking.findByIdAndRemove(id)
    .maxTimeMS(5000)
    .then((response) => {
      res.setHeader("Content-type", "application/json");
      res.json(response.id).status(200);
    })
    .catch((err) => {
      res.status(404).json();
    });
});

router.route("/:id").put(authenticate.verifyUser, (req, res) => {
  let id = parseInt(req.params.id);
  Booking.findByIdAndUpdate(id).then();
  res.setHeader("Content-Type", "application/json");
  res.json(req.body).status(200);
});
router.route("/").post(authenticate.verifyUser, (req, res) => {
  Booking.create(req.body)
    .then((booking) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(booking);
    })
    .catch((err) => {
      res.status(404).json({});
    });
});
module.exports = router;
