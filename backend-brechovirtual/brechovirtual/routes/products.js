var express = require("express");
var router = express.Router();
const Products = require('../models/Product');


/* GET (read) products listing. */
router.route("/")
.get(async (req, res, next) => {
	try{
	const productDB = await Products.find({}).populate('seller').maxTime(5000); 	//TIRAR maxtime
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(productDB);
	}catch (err){
		err = {};
		res.statusCode = 404;
		res.json(err);
	}
});


/* POST (create) product. */
router.route("/").post((req, res, next) => {
  Products.create(req.body)
	  .then ((productDB) => {
		console.log('Product created', product);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(productDB);
	}, (err) => next(err))
	  .catch((err) => next(err));
});


/* DELETE (delete) product. */
router.route("/:id")

.delete((req, res, next) => {
  Products.findByIdAndRemove(req.params.id)
	  .then ((resp) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp.id);
	}, (err) => next(err))
	.catch((err) => next(err));
})

.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Products.findById(req.params.id);
    if (resp != null){
        res.statusCode = 200;
        res.json(resp);
    } else {
        err = {};
        res.statusCode = 404;
        res.json(err);
    }
  
    } catch (errParam){
        console.log(errParam);
        res.statusCode = 404;
        res.json({});
    }
  });
//router.route("/id");


/* PUT (update) product. */
router.route("/:id").put((req, res, next) => {
  Products.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
	  .then ((product) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(product);
	}, (err) => next(err))
	  .catch((err) => next(err));
});

module.exports = router;
