import { configureStore } from '@reduxjs/toolkit'
import  productsReducer from './ProductsSlice'
import  bookingsReducer from './BookingsSlice'
import sellersReducer from './SellerSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer, 
        bookings: bookingsReducer,
        sellers: sellersReducer,
     /*aqui poderiam entrar mais reducers, um por chave do mapa */
    }
})
