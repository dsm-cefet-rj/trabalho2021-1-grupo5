import React from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import BookingBar from "../components/bookingBar";
import { useSelector } from "react-redux";

export default function BookingList() {
  const bookings = useSelector((state) => state.bookings);
  return (
    <>
      <Navbar />
      <Jumbotron title={"Lista de Reservas"} text={"Reservas em andamento"} />
      <div className="container">
        <div className="col">
          {bookings.map((booking) => {
            return (
              <React.Fragment>
                {booking.status === "em andamento" && (
                  <BookingBar key={booking.id} booking={booking} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <Jumbotron title={""} text={"Reservas concluídas"} />
      <div className="container">
        <div className="col">
          {
            //FILTRAR PELO STATUS DA RESERVA
            bookings.map((booking) => {
              return (
                <>
                  {booking.status !== "em andamento" && (
                    <BookingBar key={booking.id} booking={booking} />
                  )}
                </>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
//TODO ? formatar o date()