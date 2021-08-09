import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'

export default function BookkingList() {
    return(
        <>
            <Navbar/>
            <Jumbotron title={"EmLista de Reservas"} text={"Aqui estão suas Reservas"}/>
            <div class="container">
                 <div class="col">
                     {
                         
                     }
                 </div>
            </div>

        </>
    )
}