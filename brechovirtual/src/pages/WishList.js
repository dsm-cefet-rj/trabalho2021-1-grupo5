import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron';
import Button from '../components/button';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import casaco from '../images/casaco.jpg';
import casaco2 from '../images/casaco2.jpg';
import tenis from '../images/tenis.jpeg';
import tenis2 from '../images/tenis2.jpeg';
import excluir from '../images/excluir.png';

const WishList = () => {
  const wishItems = [
    {
      name: "Calça Jeans",
      price: "59,00",
      img: [jeans, jeans2]
    },
    {
      name: "Tênis casual",
      price: "88,00",
      img: [tenis, tenis2]
    },
    {
      name: "Casaco Moleton",
      price: "55,70",
      img: [casaco, casaco2]
    }
  ];

  return(
      <React.Fragment>
        <Navbar />
        <Jumbotron title={"Lista de Desejos"} text={"Aqui estão seus itens da lista de desejos"}/>
        <div className="container">
          {
            wishItems.map((elem) =>
                <div className="col" key={elem.name}>
                  <div className="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                      <h4>
                          <img src={elem.img[0]} className="img-fluid" width="40" height="40" alt="" /> 
                          <a className="btn btn-link" href> {elem.name} - R$ {elem.price}</a>
                          <Button color={'LightGreen'} title={"Reservar"} />  &nbsp;&nbsp;
                          <a href> <img src= { excluir } width="20" height="20" title="Remover" alt="" /> </a>
                      </h4>
                  </div>
                </div>
            )
          }
        </div>
      </React.Fragment>
  );
};
//#TODO #1 : check out the href atttibutes
//#TODO #2 review all the key attributes
export default WishList;