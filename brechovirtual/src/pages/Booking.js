import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Carrousel from '../components/carrousel';
import Chat from '../components/chat';
import Button from '../components/button';
import { useParams, useHistory } from 'react-router';
import {deleteBookingServer,selectBookingById, updateBookingServer} from '../BookingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, updateProductsServer } from '../ProductsSlice';

export default function Booking(){
  //  const bookings = useSelector(selectAll)
    const [message, setMessage] = useState("")
    const history = useHistory()
    let { id } = useParams()
    id = parseInt(id)
    const dispatch = useDispatch()
    var booking = useSelector(state=>selectBookingById(state,id))// bookings.filter(booking=>booking.id === id)[0]
    var products = useSelector(selectAllProducts)
    var product = products.filter((product)=>product.name === booking.name)[0]

    function handleInputChange(e){
        setMessage(e.target.value)
    }

    function dataAtualFormatada(){
        function pad(s) {
            return (s < 10) ? '0' + s : s;
        }
        let data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear(),
            hora = [data.getHours(), data.getMinutes()].map(pad).join(':');
        return `${dia}/${mes}/${ano} ${hora} - `;
    }

    function handleDelete(e){
        //bookings.splice(product.id,1)
        //setProduct([...bookings])
        e.preventDefault()
        dispatch(deleteBookingServer(id));
        dispatch(updateProductsServer({...product,status:'aberto'}))
        alert("Reserva excluida.")
        history.push("/bookingList")
    }
    function handleConclude(event){
        event.preventDefault()
        dispatch(updateBookingServer({...booking,status:'fechado'}))
        alert("Reserva concluida. ")
        history.push("/bookingList")
        
    }

    function handleClick() {
        const newMessage = {
            userType: "Vendedor",
            userName: "Marcelo",
            date: dataAtualFormatada(),
            message: message
        };
        var newMessagesArray = booking.messages.concat([{...newMessage}]);
        dispatch(updateBookingServer({...booking, messages:newMessagesArray}));
        setMessage("")
    }

    return(
        <>
            <Navbar/>
            <Jumbotron title={`Reserva nº ${booking.id} - ${booking.status}`} text={" "}/>
            <div className="container justify-content-md-center">
                <div className="row justify-content-center ">
                <div className="col justify-content-center ">
                    <div className="row justify-content-center">
                        <div className="justify-content-center">
                            <Carrousel images={booking.image} id={booking.id}/>
                          </div>
                    </div>
                    <div className="row justify-content-md-center">
                     <div className="col-md-6 custom-file">
            
            
                     </div>
                </div>  
            </div>
                    <div className="col">
                        <div className="form-row">
                            <div className="col-md-7 mb-3">
                            <label for="validationTooltip01"><h2><b>{booking.name}</b></h2></label>
                            </div>
                        </div>

                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                        <label ><b>Preço: </b></label>
                        <label >R${booking.price}</label>
                        </div>
                    </div> 
                    <div className="form-row">
                    <div className="col-md-3 mb-3">
                        <label ><b>Categoria: </b></label>
                        <label >{booking.category}</label>
                    </div>
                    </div>
                     <div className="form-row">
                        <div className="col-md-7 mb-3">
                            <label ><b>Descrição: </b></label>
                            <label>{booking.description}</label>
                        </div>
                    </div>
                     <div className="form-row">
                         <div className="col-md-7  mb-3">
                            <Button color="LightGreen" title={"Concluir Reserva"} onClick={handleConclude}/> 
                            <Button color="red" title={"Cancelar Reserva"} onClick={handleDelete}/>
                        </div>
                      </div>
                </div>
                </div>
                        <div className="row justify-content-center">
                            <p style={{fontSize: 15}}> <b>Vendedor:</b> {booking.seller} </p>
                        </div>     
                        <div className="row justify-content-center">    
                            <p style={{fontSize: 15}}> <b>Telefone:</b> {booking.telephone} </p>
                        </div>     
                        <div className="row justify-content-center">    
                            <p style={{fontSize: 15}}> <b>Email:</b> {booking.email} </p>
                        </div>  
                        </div>
                        <div className="container">
                             <div className="col"> 
                                <Chat
                                    messages={booking.messages}
                                />  
                             <div>
                                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleInputChange} value={message} rows="3"></textarea>
                            </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="row justify-content-center">  
                            <Button color="purple" onClick={handleClick} title={"Responder"}/> 
                        </div>

        </>
    );
}