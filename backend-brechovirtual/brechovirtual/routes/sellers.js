const { response } = require("express");
var express = require("express");
var router = express.Router();
const seller = require("../models/Seller");


router.route("/").get(async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const sellers = await seller.find().maxTimeMS(5000);
    if (seller != null) {
      res.statusCode = 200;
      res.json(sellers);
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
    let resp = await seller.findById(id);
    if (resp != null) {
      res.statusCode = 200;
      res.json(resp);
    } else {
      res.statusCode = 404;
      res.json({});
    }
  } catch (error) {
    res.statusCode = 404;
    res.json({});
  }
});

/* POST (create) */
router.route("/").post((req, res, next) => {
  seller.create(req.body)
    .then(
      (response) => {
        console.log("Product created", response);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

/* DELETE (delete) */
router.route("/:id").delete((req, res, next) => {
  let id = req.params.id;
  seller
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

/* PUT (update) */
router.route("/:id").put((req, res, next) => {
  let id = req.params.id;
  seller
    .findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(
      (seller) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(seller);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;




