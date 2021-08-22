import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Product";
import ProductRegister from "./pages/ProductRegister";
import WishList from "./pages/WishList";
import Booking from "./pages/Booking";
import BookingList from "./pages/BookingList";
import "./App.css";


export default function App() {
 

  return (
    <>
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
    </>
  );
}
