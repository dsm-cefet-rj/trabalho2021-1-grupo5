import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Carrousel from '../components/carrousel';
import Chat from '../components/chat';
import Button from '../components/button';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import { useParams, useHistory } from 'react-router';

export default function Booking({ bookings, setBookings }){
     const [message, setMessage] = useState("")
     const history = useHistory()
     let { id } = useParams()
    function handleInputChange(event){
        setMessage(event.target.value)
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

    const [product, setProduct] = useState(bookings[id]);
    function handleDelete(event){
        bookings.splice(product.id,1)
        setProduct([...bookings])
        event.preventDefault()
        alert("Reserva excluida")
        history.push("/bookingList")
    }
    function handleClick() {
        const newMessage = {
            userType: "Vendedor",
            userName: "Marcelo",
            date: dataAtualFormatada(),
            message: message
        };

        const newMessagesArray = product.messages.push(newMessage);
        setBookings({ ...product, messages: newMessagesArray });
        setMessage("")
    }
    return(
        <>
            <Navbar/>
            <Jumbotron title={`Reserva nº ${product.id} - ${product.status}`} text={" "}/>
            <div className="container justify-content-md-center">
                <div className="row justify-content-center ">
                <div className="col justify-content-center ">
                    <div className="row justify-content-center">
                        <div className="justify-content-center">
                            <Carrousel images={product.image} id={product.id}/>
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
                            <label for="validationTooltip01"><h2><b>{product.name}</b></h2></label>
                            </div>
                        </div>

                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                        <label ><b>Preço: </b></label>
                        <label >R${product.price}</label>
                        </div>
                    </div> 
                    <div className="form-row">
                    <div className="col-md-3 mb-3">
                        <label ><b>Categoria: </b></label>
                        <label >{product.category}</label>
                    </div>
                    </div>
                     <div className="form-row">
                        <div className="col-md-7 mb-3">
                            <label ><b>Descrição: </b></label>
                            <label>{product.description}</label>
                        </div>
                    </div>
                     <div className="form-row">
                         <div className="col-md-7  mb-3">
                            <Button color="LightGreen" title={"Concluir Reserva"} /> 
                            <Button color="red" title={"Cancelar Reserva"} onClick={handleDelete}/>
                        </div>
                      </div>
                </div>
                </div>
                        <div className="row justify-content-center">
                            <p style={{fontSize: 15}}> <b>Vendedor:</b> {product.seller} </p>
                        </div>     
                        <div className="row justify-content-center">    
                            <p style={{fontSize: 15}}> <b>Telefone:</b> {product.telephone} </p>
                        </div>     
                        <div className="row justify-content-center">    
                            <p style={{fontSize: 15}}> <b>Email:</b> {product.email} </p>
                        </div>  
                        </div>
                        <div className="container">
                             <div className="col"> 
                                <Chat
                                    messages={product.messages}
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