import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Product";
import ProductRegister from "./pages/ProductRegister";
import WishList from "./pages/WishList";
import Booking from "./pages/Booking";
import BookingList from "./pages/BookingList";
import "./App.css";
import jeans from "./images/jeans.jpeg";
import jeans2 from "./images/jeans2.jpeg";
import casaco from "./images/casaco.jpg";
import casaco2 from "./images/casaco2.jpg";
import tenis from "./images/tenis.jpeg";
import tenis2 from "./images/tenis2.jpeg";
import vestido from "./images/vestido-rosa2.jpg";
import vestido2 from "./images/vestido-rosa.jpg";

export default function App() {
  const [products, setProducts] = useState(
    [
      {
        id: 0,
        name: "Calça Jeans",
        images: [jeans, jeans2],
        description: "This is a pretty new black jean without any real damage",
        price: 56.99,
        status: "aberto",
        category: "Calças",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 1,
        name: "Casaco",
        images: [casaco, casaco2],
        description: "This is a pretty new black jean without any real damage",
        price: 99.63,
        status: "aberto",
        category: "Casaco",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 2,
        name: "Tênis",
        images: [tenis, tenis2],
        description: "This is a pretty new black jean without any real damage",
        price: 51.0,
        status: "reservado",
        category: "Tênis",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 3,
        name: "Vestido rosa",
        images: [vestido, vestido2],
        description: "This is a pretty new black jean without any real damage",
        price: 89.95,
        status: "aberto",
        category: "Vestido",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
    ]
  );
  const [bookings, setBookings] = useState([
    {
      id:0,
      name: "Calça Jeans",
      seller: "Marcelo peireira",
      price: "59.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans],
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
      id: 1,
      name: " Jeans",
      seller: " peireira",
      price: "69.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans2],
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
      id:2,
      name: "Calça Jeans",
      seller: "Marcelo Joao ",
      price: "100.99",
      date: "01/08/2021 ",
      location: "Centro",
      status: "fechado",
      image: [jeans],
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
    }
  ]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home products={products} />
          </Route>
          <Route exact path='/product/:id'>
            <Product products={products} bookings={bookings} setBooking={setBookings} setProduct={setProducts}/>
          </Route>
          <Route path="/products/new">
            <ProductRegister products={products} setProducts={setProducts} />
          </Route>
          <Route path="/booking/:id">
            <Booking bookings={bookings} setBookings={setBookings} />
          </Route>
          <Route path="/bookingList">
            <BookingList bookings={bookings} />
          </Route>
          <Route path="/wishList">
            <WishList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
