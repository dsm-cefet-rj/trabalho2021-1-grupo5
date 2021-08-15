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
      "category": "Calças",
      "seller" : 'Marcelo peireira',
       "location": "Tijuca"
      
    },
     {
      "id": 2,
      "name": "Casaco",
      "images": [casaco, casaco2],
      "description":"This is a pretty new black jean without any real damage",
      "price": 99.63,
      "category": "Casaco",
       "seller" : 'Marcelo peireira',
        "location": "Tijuca"
    },
    {
      "id": 3,
      "name": "Tênis",
      "images": [tenis, tenis2],
      "description":"This is a pretty new black jean without any real damage",
      "price": 51.00,
      "category": "Tênis",
       "seller" : 'Marcelo peireira',
       "location": "Tijuca"
    },
  ]
 );
  const [booking, setBooking] = useState( [
      {
          "name" : "Calça Jeans",
          "seller" : 'Marcelo peireira',
          "price" : "59.99",
          "date": Date(),
          "location": "Tijuca",
          "status": "em andamento",
          "image": [jeans],
          "messages": [
        {
            "date": "13/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Como podemos marcar a retirada do produto?"  
        }, 
        {
            "date": "14/07/2021",
            "userType": "Comprador",
            "userName": "Raphael" ,
            "message": "Podemos marcar quarta pela tarde?"   
        }, 
        {
            "date": "15/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Tudo bem!!!"
        }]
      },
      {
          "name" : " Jeans",
          "seller" : ' peireira',
          "price" : "69.99",
          "date": Date(),
          "location": "Tijuca",
          "status": "em andamento",
          "image": [jeans2],
          "messages": [
        {
            "date": "13/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Como podemos marcar a retirada do produto?"  
        }, 
        {
            "date": "14/07/2021",
            "userType": "Comprador",
            "userName": "Raphael" ,
            "message": "Podemos marcar quarta pela tarde?"   
        }, 
        {
            "date": "15/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Tudo bem!!!"
        }]
      },
      {
          "name" : "Calça Jeans",
          "seller" : 'Marcelo Joao ',
          "price" : "100.99",
          "date": "01/08/2021 ",
          "location": "Centro",
          "status": "fechado",
          "image": [jeans],
          "messages": [
        {
            "date": "13/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Como podemos marcar a retirada do produto?"  
        }, 
        {
            "date": "14/07/2021",
            "userType": "Comprador",
            "userName": "Raphael" ,
            "message": "Podemos marcar quarta pela tarde?"   
        }, 
        {
            "date": "15/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Tudo bem!!!"
        }]
      },
  ]
  );

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact><Home products={product} /></Route>
        <Route path='/product'><Product products={product} bookings={booking} setBooking={setBooking} id={2}/></Route>
        <Route path='/products/new'><ProductRegister products={product} setProducts={setProduct}/></Route>
        <Route path='/booking'><Booking bookings={booking} setBooking={setBooking}/></Route>
        <Route path='/bookingList'><BookingList bookings={booking}/></Route>
        <Route path='/wishList'><WishList /></Route>
      </Switch>
    </Router>
    </>
  )
}


