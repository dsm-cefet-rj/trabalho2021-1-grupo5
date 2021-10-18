var express = require("express");
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'brechovirtual/public' });

const Products = require("../models/Product");
var authenticate = require("../auth");
const { corsWithOptions } = require("./cors");
const maxFotos = 2

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

/* POST (create) product. */
router
  .route("/")
  .post(corsWithOptions, authenticate.verifyUser, upload.array('images', maxFotos), (req, res, next) => {
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

  .delete(corsWithOptions, authenticate.verifyUser, (req, res, next) => {
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
