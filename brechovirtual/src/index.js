import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './store'
import { fetchProducts } from './slices/ProductsSlice';
import { fetchBookings } from './slices/BookingsSlice';
import { fetchSellers } from './slices/SellerSlice';

store.dispatch(fetchProducts());
store.dispatch(fetchBookings());
store.dispatch(fetchSellers());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
