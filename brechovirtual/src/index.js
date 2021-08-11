import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Booking from './pages/Booking';
import Product from './pages/Product';
import ProductRegister from './pages/ProductRegister';
import reportWebVitals from './reportWebVitals';
import BookingList from './pages/BookingList';
import WishList from './pages/WishList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Booking />
    <BookingList />
    <Product />
    <ProductRegister />
    <WishList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
