var express = require("express");
var router = express.Router();
var bookings = [
  {
    id: 1,
    idProduct: 1,
    idBuyer: 1,
    date: "20/07/2021",
    status: "em andamento",
    messages: [
      {
        date: "13/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Como podemos marcar a retirada do produto?",
      },
      {
        date: "14/07/2021",
        userType: "Comprador",
        userName: "Raphael",
        message: "Podemos marcar quarta pela tarde?",
      },
      {
        date: "15/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Tudo bem!!!",
      },
    ],
  },
  {
    id: 2,
    idProduct: 3,
    idBuyer: 1,
    date: "20/07/2021",
    status: "em andamento",
    messages: [
      {
        date: "13/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Como podemos marcar a retirada do produto?",
      },
      {
        date: "14/07/2021",
        userType: "Comprador",
        userName: "Raphael",
        message: "Podemos marcar quarta pela tarde?",
      },
      {
        date: "15/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Tudo bem!!!",
      },
    ],
  },
  {
    id: 3,
    idProduct: 4,
    idBuyer: 1,
    date: "01/08/2021 ",
    status: "fechado",
    messages: [
      {
        date: "13/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Como podemos marcar a retirada do produto?",
      },
      {
        date: "14/07/2021",
        userType: "Comprador",
        userName: "Raphael",
        message: "Podemos marcar quarta pela tarde?",
      },
      {
        date: "15/07/2021",
        userType: "Vendedor",
        userName: "Marcelo",
        message: "Tudo bem!!!",
      },
    ],
  },
  {
    id: 4,
    idProduct: 5,
    idBuyer: 1,
    date: "31/08/2021 22:20 - ",
    status: "fechado",
    messages: [
      {
        userType: "Vendedor",
        userName: "Marcelo",
        date: "31/08/2021 22:21 - ",
        message: "WEJDSKCJDC",
      },
      {
        userType: "Vendedor",
        userName: "Marcelo",
        date: "31/08/2021 22:21 - ",
        message: "SJDJDFC",
      },
      {
        userType: "Vendedor",
        userName: "Marcelo",
        date: "31/08/2021 22:23 - ",
        message: "HSFDJKC",
      },
      {
        userType: "Vendedor",
        userName: "Marcelo",
        date: "31/08/2021 22:27 - ",
        message: "hello",
      },
    ],
  },
];
router.route("/").get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(bookings);
});

router.route("/:id").get((req, res, next) => {
  let id = parseInt(req.params.id);
  let booking = bookings.filter((booking) => (booking.id = id));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(booking);
});
router.route("/:id").delete((req, res, next) => {
  let id = parseInt(req.params.id);
  bookings = bookings.filter((booking) => booking.id != id);
  res.setHeader("Content-type", "application/json");
  res.send("success");
});
router.route("/:id").put((req, res, next) => {
  let id = parseInt(req.params.id);
  id = bookings.map((booking) => (booking = booking.id)).indexOf(id);
  bookings.splice(id, 1, req.body);
});
router.route("/").post((req, res, next) => {
  let nextId =
    bookings.map((booking) => booking.id).reduce((x, y) => Math.max(x, y)) + 1;
  bookings.push({ ...req.body, id: nextId });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send("success");
});
module.exports = router;
