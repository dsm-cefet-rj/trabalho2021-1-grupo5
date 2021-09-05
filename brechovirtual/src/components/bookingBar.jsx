import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProductsById } from '../slices/ProductsSlice'
import { selectSellersById } from '../slices/SellerSlice'


export default function BookingBar({booking}) {
    const product = useSelector((state)=>selectProductsById(state,booking.idProduct))
    const seller = useSelector((state)=>selectSellersById(state,product.idSeller))
    return(
        <>
           <div class="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                <h4>
                    <img src={product.images[0]} width="40" height="40"  alt=""/> 
                    <Link to={`/booking/${booking.id}`}> <span>{product.name}</span> - R$<span>{product.price}</span></Link>               
		            &nbsp;         
		            <p style={{fontSize:15 +'px'}}>
                         <span><b>Vendedor: </b></span>
                         <span>{seller.name}</span> - <span>{`${seller.address.district}, ${seller.address.city}`}</span>
                    </p>
		            <p style={{fontSize:15+'px'}}>
                        <span><b>Data de Reserva: </b></span>
                        <span>{booking.date}</span> - <span>
                            <b> Status: </b></span><span>{booking.status}</span>
                    </p>
                </h4>
            </div>
        </>
    )
}