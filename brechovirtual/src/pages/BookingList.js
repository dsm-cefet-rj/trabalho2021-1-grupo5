import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import BookingBar from '../components/bookingBar';
import Calca from '../images/jeans.jpeg'

export default function BookingList() {
    const reservas = [
        {
            "name" : "Calça Jeans",
            "seller" : 'Marcelo peireira',
            "price" : "59.99",
            "date": Date(),
            "location": "Tijuca",
            "status": "em andamento",
            "image": Calca,
        },
        {
            "name" : " Jeans",
            "seller" : ' peireira',
            "price" : "69.99",
            "date": Date(),
            "location": "Tijuca",
            "status": "em andamento",
            "image": Calca,
        },
        {
            "name" : "Calça Jeans",
            "seller" : 'Marcelo Joao ',
            "price" : "100.99",
            "date": "01/08/2021 ",
            "location": "Centro",
            "status": "fechado",
            "image": Calca,
        },
    ]
    return(
        <>
            <Navbar/>
            <Jumbotron title={"Lista de Reservas"} text={"Aqui estão suas Reservas"}/>
            <div class="container">
                 <div class="col">
                     {
                        reservas.map((reserva)=>{
                            return(
                                <>
                                    <BookingBar key={reserva.name} booking ={reserva}/>
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