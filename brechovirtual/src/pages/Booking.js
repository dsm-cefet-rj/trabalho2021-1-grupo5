import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Carrousel from '../components/carrousel';
import Chat from '../components/chat';
import Button from '../components/button';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';

export default function Booking(){
    const product = {
    "id": 1,
    "name": "Calça Jeans",
    "images": [jeans, jeans2],
    "description":"This is a pretty new black jean without any real damage",
    "price": 56.99,
    "category": "Calças",
    "seller": "Marcelo",
    "telephone": "21 999999999",
    "email": "marceloper@gmail.com",
    "buyer": "Raphael",
    "messages": [
        {
            "date": "13/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Como podemos marcar a retirada do produto?"  
        }, 
        {
            "date": "14/07/2021",
            "userType": "Comprador",
            "userName": "Raphael" ,
            "message": "Podemos marcar quarta pela tarde?"   
        }, 
        {
            "date": "15/07/2021",
            "userType": "Vendedor",
            "userName": "Marcelo" ,
            "message": "Tudo bem!!!"
        }]
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
                            <Carrousel images={product.images} id={product.id}/>
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
                         <div className="col-md-7 mb-3">
                            <Button style={{backgroundColor: "#ccb5f7"}} title={"Concluir Reserva"}/> 
                            <Button style={{backgroundColor: "#ccb5f7"}} title={"Cancelar Reserva"}/>
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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="row justify-content-center">  
                            <Button style={{backgroundColor: "#ccb5f7"}} title={"Responder"}/> 
                        </div>

        </>
    );
}