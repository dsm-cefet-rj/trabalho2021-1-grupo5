import {Navbar, Card, Dropdown} from '/components'
import logo from '/images/logo2.png';
import { casaco, casaco2, jeans, jeans2, tenis, tenis2 } from '/images';
import './App.css';


const products = {
  "1" : {
    "name": "Calça Jeans",
    "images": [jeans, jeans2],
    "description":"This is a pretty new black jean without any real damage",
    "price": 56.99,
    "category": "Calças"
  },
  "2" : {
    "name": "Casaco",
    "images": [casaco, casaco2],
    "description":"This is a pretty new black jean without any real damage",
    "price": 99.63,
    "category": "Casaco"
  },
  "3" : {
    "name": "Tênis",
    "images": [tenis, tenis2],
    "description":"This is a pretty new black jean without any real damage",
    "price": 51.00,
    "category": "Tênis"
  }
}

export default function App() {
  return (
    <>
      <Navbar><Dropdown/></Navbar>
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
        <div class="row ">
            {products.map((prod)=>{
              return (
                <Card product={prod}/>
              )
            })}
        </div>
      </div> 
    </>
  );
}


