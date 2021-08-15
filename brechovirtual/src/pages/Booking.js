import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Carrousel from '../components/carrousel';
import Chat from '../components/chat';
import Button from '../components/button';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';

export default function Booking(props){
     const [message, setMessage] = useState("")
    
    function handleInputChange(event){
        setMessage(event.target.value)
    }
    const product = props.bookings[1];
    function handleClick(event){
        product.messages.concat({
            "userType":"vendedor",
            "userName":"Pietro",
            "date": Date(),
            "message": message

        })
        alert("rodando")
        props.setBooking([...product.message,message])
    }
    return(
        <>
             <Navbar/>
            <Jumbotron title={"Reserva nº 9857 - Em andamento"} text={" "}/>
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
                            <Button color="LightGreen" title={"Concluir Reserva"}/> 
                            <Button color="red" title={"Cancelar Reserva"}/>
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
                                <Chat messages={product.messages} date={product.messages.date} userType={product.messages.userType} userName={product.messages.userName} message={product.messages.message}/>  
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