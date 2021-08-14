import {React} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/Product';
import ProductRegister from './pages/ProductRegister';
import WishList from './pages/WishList';
import Booking from './pages/Booking';
import BookingList from './pages/BookingList';
import './App.css';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/product' component={Product}/>
        <Route path='/products/new' component={ProductRegister}/>
        <Route path='/booking' component={Booking}/>
        <Route path='/bookingList' component={BookingList}/>
        <Route path='/wishList' component={WishList}/>
      </Switch>
    </Router>
    </>
  )
}


