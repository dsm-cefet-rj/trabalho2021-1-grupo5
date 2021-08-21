import { configureStore } from '@reduxjs/toolkit'
import  productsReducer from './ProductsSlice'
import  bookingsReducer from './BookingsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer, 
        bookings: bookingsReducer,
     /*aqui poderiam entrar mais reducers, um por chave do mapa */
    }
})
