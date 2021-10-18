var express = require("express");
var router = express.Router();
const Products = require("../models/Product");
const Sellers = require("../models/Seller")
var authenticate = require("../auth");
const { corsWithOptions } = require("./cors");
/* GET (read) products listing. */

router
  .route("/")
  .options(corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(corsWithOptions, async (req, res, next) => {
    try {
      const productDB = await Products.find({})
        .populate("idSeller")
        .maxTime(5000); //TIRAR maxtime
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(productDB);
    } catch (err) {
      console.log(err);
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  });


/**
 * gets the products of a particular seller
 */
router.route("/user").get(corsWithOptions, async (req, res, next) => {
  try {
    const { _id } = Sellers.findOne({ userId: req.body.userId })
    const products = Products.find({ idSeller: _id })
    res.status(200).setHeader("Content-type", "application/json").json(products)
  } catch (err) {
    res.status(400).setHeader("Content-type", "application/json").json({})
  }
});

/* POST (create) product. */
router
  .route("/")
  .post(corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    const seller = Sellers.findOne({ userId: req.body.userId })
    if (seller) {
      Products.create({ ...req.body.product, idSeller: seller._id })
        .then(
          (productDB) => {
            console.log("Product created", productDB);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(productDB);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
    else {
      res.status(401).setHeader("Content-Type", "application/json").json({ message: unauthorized });
    }
  });

/* DELETE (delete) product. */
router
  .route("/:id")

  .delete(corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    const idSeller = Products.findById(req.params.id).idSeller;
    if (req.body.userId === (Sellers.findById(idSeller).userId)) {
      Products.findByIdAndRemove(req.params.id)
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp.id);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.status(401).setHeader("Content-Type", "application/json").json({})
    }
  })
  .get(corsWithOptions, async (req, res, next) => {
    let err;
    res.setHeader("Content-Type", "application/json");
    try {
      const resp = await Products.findById(req.params.id).populate("idSeller");
      if (resp != null) {
        res.statusCode = 200;
        res.json(resp);
      } else {
        err = {};
        res.statusCode = 404;
        res.json(err);
      }
    } catch (errParam) {
      console.log(errParam);
      res.statusCode = 404;
      res.json({});
    }
  });
//router.route("/id");

/* PUT (update) product. */
router
  .route("/:id")
  .put(corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    const idSeller = Products.findById(req.params.id).idSeller;
    if (req.body.userId === (Sellers.findById(idSeller).userId)) {
      Products.findByIdAndUpdate(req.params.id, { $set: req.body.product }, { new: true })
        .then(
          (product) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(product);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
    else {
      res.status(401).setHeader("Content-Type", "application/json").json({})
    }
  });

module.exports = router;
