var express = require("express");
var router = express.Router();
var sellers = [
  {
    id: 1,
    name: "Marcos Pereira Almeida",
    document: "111.222.333.44",
    ddd: 21,
    number: "999998888",
    email: "marcospereira@gmail.com",
    street: "Rua General Canabarro",
    district: "Maracanã",
    city: "Rio de Janeiro",
    state: "RJ",
  },
  {
    id: 2,
    name: "Antonio Carlos Amorim",
    document: "111.777.999.44",
    ddd: 21,
    number: "999996666",
    email: "antonioca@hotmail.com",
    status: "ativo",
    street: "Rua Haddock Lobo, 70",
    district: "Centro",
    city: "Niteroi",
    state: "RJ",
  },
  {
    id: 3,
    name: "Pedro Moraes",
    document: "22233311133",
    ddd: 21,
    number: "988887777",
    email: "pmr@hotmail.com",
    street: "Rua 1, lote A",
    district: "Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
  },
  {
    id: 4,
    name: "Luma Chen",
    document: "109.109.309-49",
    ddd: 21,
    number: "34542145",
    email: "luma.fonseca@aluno.cefet-rj.br",
    street: "Rua General Canabarro",
    district: "Maracanã",
    city: "Rio de Janeiro",
    state: "RJ",
  },
];

router.route("/").get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(sellers);
});

router.route("/:id").get((req, res, next) => {
  const id = parseInt(req.params.id);
  const seller = sellers.filter((seller) => (seller.id = id));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(seller);
});

/* POST (create) */
router.route("/").post((req, res, next) => {
  let nextId = 1 + sellers.map((p) => p.id).reduce((x, y) => Math.max(x, y));
  let seller = { ...req.body, id: nextId };
  sellers.push(seller);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(seller);
  console.log(sellers);
});

/* DELETE (delete) */
router
  .route("/:id")
  .delete((req, res, next) => {
    sellers = sellers.filter(function (value, index, arr) {
      return value.id != req.params.id;
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .get((req, res, next) => {
    const id = parseInt(req.params.id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const seller = sellers.filter((seller) => seller.id === id);
    res.json(seller);
  });

/* PUT (update) */
router.route("/:id").put((req, res, next) => {
  let index = sellers.map((p) => p.id).indexOf(req.params.id);
  sellers.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(req.body);
});

module.exports = router;