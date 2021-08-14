import React from 'react';
import Card from '../components/card'
import Navbar from '../components/navbar'
import logo from '../images/logo2.png';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import casaco from '../images/casaco.jpg';
import casaco2 from '../images/casaco2.jpg';
import tenis from '../images/tenis.jpeg';
import tenis2 from '../images/tenis2.jpeg'


const products = [
    {
     "id": 1,
     "name": "Calça Jeans",
     "images": [jeans, jeans2],
     "description":"This is a pretty new black jean without any real damage",
     "price": 56.99,
     "category": "Calças"
   },
    {
     "id": 2,
     "name": "Casaco",
     "images": [casaco, casaco2],
     "description":"This is a pretty new black jean without any real damage",
     "price": 99.63,
     "category": "Casaco"
   },
   {
     "id": 3,
     "name": "Tênis",
     "images": [tenis, tenis2],
     "description":"This is a pretty new black jean without any real damage",
     "price": 51.00,
     "category": "Tênis"
   },
 ]
 
 export default function Home() {
   const renderProdcuct = (product) =>{
     return(
       <Card product={product}/>
     )
   }
   return (
     <>
       <Navbar/>
       <div class="jumbotron jumbotron-fluid bg-transparent" >
         <div class="container">
           <div class="row justify-content-center">
             <img src={logo} width="300" height="150" class="d-inline-block align-top" alt=""/>
           </div> 
           <div class="row justify-content-center">
             <p class="lead">Seu site para vendas e trocas de peças de roupas.</p>
         </div>
         </div>
       </div>
       <div class="container">
         <div class="row ">{products.map(renderProdcuct)}</div>
       </div> 
     </>
   );
 }