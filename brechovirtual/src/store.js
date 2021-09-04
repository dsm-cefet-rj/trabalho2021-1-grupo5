import { configureStore } from '@reduxjs/toolkit'
import  productsReducer from './slices/ProductsSlice'
import  bookingsReducer from './slices/BookingsSlice'
import sellersReducer from './slices/SellerSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer, 
        bookings: bookingsReducer,
        sellers: sellersReducer,
     /*aqui poderiam entrar mais reducers, um por chave do mapa */
    }
})
