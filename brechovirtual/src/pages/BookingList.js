import React from 'react';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import BookingBar from '../components/bookingBar';
import { useSelector } from 'react-redux';

export default function BookingList() {
    const bookings = useSelector(state=>state.bookings)
    return(
        <>
            <Navbar/>
            <Jumbotron title={"Lista de Reservas"} text={"Aqui estão suas Reservas"}/>
            <div className="container">
                 <div className="col">
                     {
                        bookings.map((booking)=>{
                            return(
                                <>
                                    <BookingBar key={booking.id} booking ={booking}/>
                                </>
                            )
                        })
                     }
                 </div>
            </div>

        </>
    )
}
//TODO ? formatar o date()