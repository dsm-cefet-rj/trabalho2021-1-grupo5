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

 
 export default function Home(props) {
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
         <div class="row ">{props.products.map(renderProdcuct)}</div>
       </div> 
     </>
   );
 }