import { React, useState, Provider } from "react";
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
import {store} from './store';

export default function App() {
 

  return (
    <>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path='/product/:id'>
            <Product />
          </Route>
          <Route path="/productForm/novo">
            <ProductRegister  />
          </Route>
          <Route path="/productForm/:id">
            <ProductRegister  />
          </Route>
          <Route path="/booking/:id">
            <Booking  />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/wishList">
            <WishList />
          </Route>
        </Switch>
      </Router>
      </Provider>
    </>
  );
}
