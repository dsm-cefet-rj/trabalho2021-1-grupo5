import React from 'react'

export default function BookingBar(props) {
    return(
        <>
           <div class="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                <h4>
                    <img src={props.booking.image} width="40" height="40"  alt=""/> 
                    <a href="Reserva.html"> <span>{props.booking.name}</span>- R$<span>{props.booking.price}</span></a>               
		            &nbsp;         
		            <p style={{fontSize:15 +'px'}}>
                         <span><b>Vendedor: </b></span>
                         <span>{props.booking.seller}</span> - <span>{props.booking.location}</span>
                    </p>
		            <p style={{fontSize:15+'px'}}>
                        <span><b>Data de Reserva:</b></span>
                        <span>{props.booking.date}</span> - <span>
                            <b>Status: </b></span><span>{props.booking.status}</span>
                    </p>
                </h4>
            </div>
        </>
    )
}