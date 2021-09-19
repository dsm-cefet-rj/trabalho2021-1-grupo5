var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var bookingsRouter = require("./routes/bookings");
var sellersRouter = require("./routes/sellers");

var app = express();
const url =
  "mongodb+srv://Grupo5:Brecho123@cluster0.iibk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/bookings", bookingsRouter);
app.use("/sellers", sellersRouter);

module.exports = app;
