var express = require('express');
var router = express.Router();

/* GET (read) products listing. */
router.route('/')
.get((req, res, next) => {

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(products)
})

/* POST (create) product. */
router.route('/')
.post((req, res, next) => {

	let nextId = 1 + products.map(p => p.id).reduce((x,y) => Math.max(x,y));
	let product = {...req.body, id: nextId};
	products.push(product);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(product)
})


/* DELETE (delete) product. */
router.route('/:id')
.delete((req, res, next) => {

	products = products.filter(function(value, index, arr){
		return value.id != req.params.id;
	});
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(req.params.id)
})

/* PUT (update) product. */
router.route('/:id')
.put((req, res, next) => {

	let index = products.map(p => p.id).indexOf(req.params.id);
	products.splice(index, 1, req.body)
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json(req.body)
})


module.exports = router;
