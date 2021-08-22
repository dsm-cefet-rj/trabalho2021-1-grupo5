import {createSlice} from '@reduxjs/toolkit';
import jeans from "./images/jeans.jpeg";
import jeans2 from "./images/jeans2.jpeg";

const initialBookings =[
    {
      id:1,
      name: "Calça Jeans",
      seller: "Marcelo peireira",
      price: "59.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    },
    {
      id: 2,
      name: " Jeans",
      seller: " peireira",
      price: "69.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans2],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    },
    {
      id:3,
      name: "Calça Jeans",
      seller: "Marcelo Joao ",
      price: "100.99",
      date: "01/08/2021 ",
      location: "Centro",
      status: "fechado",
      image: [jeans],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    }
  ];



  function addBookingReducer(bookings, booking){
    let proxId = 1 + bookings.map(booking => booking.id).reduce((x, y) => Math.max(x,y));
    return bookings.concat([{...booking, id: proxId}]);
  }

  function deleteBookingReducer(bookings, id){
    return bookings.filter((booking) => booking.id !== id);  
  }

  function updateBookingReducer(bookings, booking){
    let index = bookings.map(booking => booking.id).indexOf(booking.id);
    bookings.splice(index, 1, booking);
    return bookings;
  }

  export const bookingsSlice = createSlice({
        name: 'bookings',
        initialState: initialBookings,
        reducers: {
           addBooking: (state, action) => addBookingReducer(state, action.payload),
           updateBooking: (state, action) => updateBookingReducer(state, action.payload),
           deleteBooking: (state, action) => deleteBookingReducer(state, action.payload)
        }
    })

export const { addBooking, updateBooking, deleteBooking } = bookingsSlice.actions
export default bookingsSlice.reducer
    