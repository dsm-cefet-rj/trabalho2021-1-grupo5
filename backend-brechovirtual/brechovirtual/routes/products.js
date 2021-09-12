var express = require('express');
var router = express.Router();

const products = 
	[
    {
      "id": 1,
      "name": "Calça Jeans",
      "images": [
        "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/calca-jeans-feminina-com-used-contatho_323244_1.jpg",
        "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/calca-jeans-feminina-com-used-contatho_323245_1.jpg"
      ],
      "description": "É uma calça jeans feminina seminova para eventos casuais.",
      "price": 56.99,
      "status": "aberto",
      "category": "Calça",
      "idSeller": 1
    },
    {
      "id": 3,
      "name": "Tênis",
      "images": [
        "https://a-static.mlcdn.com.br/618x463/tenis-adidas-coreracer-masculino/netshoes/nqq-4635-c67-41/2b9db73105382aa5ed0e1718ef426abd.jpg",
        "https://static.zattini.com.br/produtos/tenis-adidas-coreracer-masculino/67/NQQ-4635-C67/NQQ-4635-C67_zoom2.jpg?ts=1610982902&ims=544x"
      ],
      "description": "This is a pretty new black Tenis without any real damage",
      "price": 51,
      "status": "reservado",
      "category": "Tênis",
      "idSeller": 1
    },
    {
      "id": 4,
      "name": "Vestido rosa",
      "images": [
        "https://assets2.repassa.com.br/fit-in/480x0/filters:sharpen(0.5,0.5,true)/spree/products/418422/original/IMG_2300.JPG",
        "https://assets2.repassa.com.br/fit-in/1024x0/spree/products/418423/original/IMG_2301.JPG"
      ],
      "description": "This is a pretty new pink dress from switzerland",
      "price": 89.95,
      "status": "aberto",
      "category": "Vestido",
      "idSeller": 1
    },
    {
      "id": 5,
      "name": "Casaco preto",
      "price": "133.45",
      "category": "Casaco",
      "description": "This is a pretty new black jacket without any real damage",
      "images": [
        "/static/media/casaco.34608ee8.jpg",
        "https://astryd.com.br/wp-content/uploads/2020/09/casaco-viculo-basic-de-moletom-preto-costas.jpg"
      ],
      "idSeller": 1,
      "status": "aberto"
    },
    {
      "name": "CAsads",
      "price": "100",
      "category": "Macacão",
      "description": "adjsckdlcjklsnCNCsL?CmsDL;FDSVNCzc",
      "images": [
        "/static/media/casaco.34608ee8.jpg"
      ],
      "id": 6,
      "status": "reservado",
      "idSeller": 1
    }
  ]

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
