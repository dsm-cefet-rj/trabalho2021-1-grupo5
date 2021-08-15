import React from 'react';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import BookingBar from '../components/bookingBar';

export default function BookingList(props) {
    
    return(
        <>
            <Navbar/>
            <Jumbotron title={"Lista de Reservas"} text={"Aqui estão suas Reservas"}/>
            <div className="container">
                 <div className="col">
                     {
                        props.bookings.map((booking)=>{
                            return(
                                <>
                                    <BookingBar key={booking.name} booking ={booking}/>
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