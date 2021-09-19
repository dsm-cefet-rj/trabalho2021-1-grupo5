const { response } = require("express");
var express = require("express");
var router = express.Router();
const booking = require("../models/Booking");

router.route("/").get(async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const bookings = await booking.find().maxTimeMS(5000);
    if (booking != null) {
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
    let booking = await bookings.findById(id);
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
router.route("/:id").delete((req, res, next) => {
  let id = req.params.id;
  bookings
    .findByIdAndRemove(id)
    .then((response) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      res.json(response.id);
    })
    .catch((err) => {
      res.statusCode = 404;
      res.json();
    });
});

router.route("/:id").put((req, res, next) => {
  let id = parseInt(req.params.id);
  id = bookings.map((booking) => (booking = booking.id)).indexOf(id);
  bookings.splice(id, 1, req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.json(req.body);
});
router.route("/").post((req, res, next) => {
  let nextId =
    bookings.map((booking) => booking.id).reduce((x, y) => Math.max(x, y)) + 1;
  let booking = { ...req.body, id: nextId };
  bookings.push(booking);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(booking);
});
module.exports = router;
