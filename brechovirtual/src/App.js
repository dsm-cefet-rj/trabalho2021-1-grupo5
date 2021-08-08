import Navbar from './components/navbar';
import Dropdown from './components/dropdown';
import Card from './components/card';
import logo from './images/logo2.png';
import casaco from './images/casaco.jpg';
import './App.css';


const products = [
   {
    "name": "Calça Jeans",
    "images": [],
    "description":"This is a pretty new black jean without any real damage",
    "price": 56.99,
    "category": "Calças"
  },
   {
    "name": "Casaco",
    "images": [],
    "description":"This is a pretty new black jean without any real damage",
    "price": 99.63,
    "category": "Casaco"
  },
  {
    "name": "Tênis",
    "images": [],
    "description":"This is a pretty new black jean without any real damage",
    "price": 51.00,
    "category": "Tênis"
  },
]

export default function App() {
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


