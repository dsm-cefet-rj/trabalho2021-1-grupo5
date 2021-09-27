var express = require("express");
var router = express.Router();
const Products = require("../models/Product");
var authenticate = require("../auth");
/* GET (read) products listing. */
router.route("/").get(async (req, res, next) => {
  try {
    const productDB = await Products.find({}).maxTime(5000); //TIRAR maxtime
    console.log(productDB);
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

/* POST (create) product. */
router.route("/").post(authenticate.verifyUser, (req, res, next) => {
  Products.create(req.body)
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
});

/* DELETE (delete) product. */
router
  .route("/:id")

  .delete(authenticate.verifyUser, (req, res, next) => {
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
  })
  .get(authenticate.verifyUser, async (req, res, next) => {
    let err;
    res.setHeader("Content-Type", "application/json");
    try {
      const resp = await Products.findById(req.params.id);
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
router.route("/:id").put(authenticate.verifyUser, (req, res, next) => {
  Products.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(
      (product) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(product);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;
