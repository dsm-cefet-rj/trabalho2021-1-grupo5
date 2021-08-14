import {React, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/Product';
import ProductRegister from './pages/ProductRegister';
import WishList from './pages/WishList';
import Booking from './pages/Booking';
import BookingList from './pages/BookingList';
import './App.css';
import jeans from './images/jeans.jpeg';
import jeans2 from './images/jeans2.jpeg';
import casaco from './images/casaco.jpg';
import casaco2 from './images/casaco2.jpg';
import tenis from './images/tenis.jpeg';
import tenis2 from './images/tenis2.jpeg'

export default function App() {
  const [product, setProduct] = useState([
    {
      "id": 1,
      "name": "Calça Jeans",
      "images": [jeans, jeans2],
      "description":"This is a pretty new black jean without any real damage",
      "price": 56.99,
      "category": "Calças"
    },
     {
      "id": 2,
      "name": "Casaco",
      "images": [casaco, casaco2],
      "description":"This is a pretty new black jean without any real damage",
      "price": 99.63,
      "category": "Casaco"
    },
    {
      "id": 3,
      "name": "Tênis",
      "images": [tenis, tenis2],
      "description":"This is a pretty new black jean without any real damage",
      "price": 51.00,
      "category": "Tênis"
    },
  ]
 );
  

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact><Home products={product} /></Route>
        <Route path='/product'><Product /></Route>
        <Route path='/products/new'><ProductRegister products={product} setProducts={setProduct}/></Route>
        <Route path='/booking'><Booking /></Route>
        <Route path='/bookingList'><BookingList /></Route>
        <Route path='/wishList'><WishList /></Route>
      </Switch>
    </Router>
    </>
  )
}


