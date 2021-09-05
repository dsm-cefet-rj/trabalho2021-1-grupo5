import React from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import BookingBar from "../components/bookingBar";
import { useSelector } from "react-redux";
import { selectALLBookings } from "../slices/BookingsSlice";
import loading from '../images/loading.gif'

export default function BookingList() {
  const bookings = useSelector(selectALLBookings);
  const error = useSelector(state=>state.bookings.error)
  const status = useSelector(state=>state.bookings.status)


  let bookingListOpen = ''
  let bookingListClosed = ''
  if(status === 'loaded' || status === 'saved' || status === 'deleted' || status==='updated'){
    bookingListOpen = bookings.map((booking) => {
            return (
              <React.Fragment>
                {booking.status === "em andamento" && (
                  <BookingBar key={booking.id} booking={booking} />
                )}
              </React.Fragment>
            );
          })
    bookingListClosed = bookings.map((booking) => {
            return (
              <React.Fragment>
                {booking.status === "fechado" && (
                  <BookingBar key={booking.id} booking={booking} />
                )}
              </React.Fragment>
            );
          })
  }else if(status === 'loading'){
    bookingListClosed = <div><img src={loading} width="30" height="30" className="d-inline-block align-top" alt=""/>Carregando lista de reservas concluidas...</div>
    bookingListOpen = <div><img src={loading} width="30" height="30" className="d-inline-block align-top" alt=""/>Carregando lista de reservas em aberto...</div>
  }
  else if (status === 'failed'){
    bookingListClosed =<div>Error : {error}</div>
    bookingListOpen = <div>Error : {error}</div>
  }
  return (
    <>
      <Navbar />
      <Jumbotron title={"Lista de Reservas"} text={"Reservas em andamento"} />
      <div className="container">
        <div className="col">
          {bookingListOpen}
        </div>
      </div>
      <Jumbotron title={""} text={"Reservas concluídas"} />
      <div className="container">
        <div className="col">
          {bookingListClosed}
        </div>
      </div>
    </>
  );
}
//TODO ? formatar o date()