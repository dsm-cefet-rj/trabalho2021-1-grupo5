import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Carrousel from '../components/carrousel'
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import heart from '../images/heart.png';
import Button from '../components/button';


const product = {
     "id": 1,
     "name": "Calça Jeans",
     "images": [jeans, jeans2],
     "description":"This is a pretty new black jean without any real damage",
     "price": 56.99,
     "category": "Calças",
     "seller": "Marcelo",
     "branch": "Barra da Tijuca",
    "telephone": "21 999999999",
    "email": "marceloper@gmail.com"
   }

export default function Product(){
    return(
        <>
            <Navbar/>
            <Jumbotron title={product.name} text={"Anunciante: "+product.name}/>
            <div class="container">
            <div class="row d-flex justify-content-center">

            <div class="col-sm-6">
                <div class="row d-flex justify-content-center">
                    <Carrousel images={product.images} id={product.id} />
                </div>
            </div>
            
            <div class="col-sm-6">
                <form class="needs-validation" novalidate>

                <div class="row">
                    <div class="col-sm">
                    <label><b>Título</b></label>
                    <p>{product.name}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                    <label><b>Preço</b></label>
                    <p><span>R$ </span><span>{product.price}</span></p>
                    </div>
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label><b>Categoria</b></label>
                        <p>{product.catehory}</p>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm">
                    <div class="form-group">
                        <label><b>Descrição do anúncio</b></label>
                        <p>{product.description}</p>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                            <a  href="#" > 
                                <img src={heart} width="30" height="30" class="d-inline-block " alt="" title='Lista de Desejos'/>
                            </a>
                    </div>
                    <div class="col">
                        <Button style={{backgroundColor: "#ccb5f7"}} title={"Reservar"}/> 
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>

            &nbsp;

            <div class="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-center">
            <div class='container'>
                <div class="row d-flex justify-content-center">
                <p><b>Vendedor: </b>{product.seller}</p>
                </div>
                <div class="row d-flex justify-content-center">
                <p><b>Bairro: </b>{product.branch}</p>
                </div>
                <div class="row d-flex justify-content-center"> 
                <p><b>Telefone: </b>{product.telephone}</p>
                </div>
                <div class="row d-flex justify-content-center">  
                <p><b>E-mail: </b>{product.email}</p>
                </div>
            </div>  
            </div>
        </>
    );
}