import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron';
import Button from '../components/button';
import Carrousel from '../components/carrousel';
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import casaco from '../images/casaco.jpg';
import casaco2 from '../images/casaco2.jpg';
import tenis from '../images/tenis.jpeg';
import tenis2 from '../images/tenis2.jpeg';

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
            wishItems.map((elem, idx) => {
              return (
                <div className="col">
                  <div className="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                      <h4>
                          <img src={elem.img[0]} className="img-fluid" width="40" height="40" /> 
                          <a className="btn btn-link"> {elem.name} - R$ {elem.price}</a>
                          <Button color={'LightGreen'} title={"Reservar"} />{"                    "}
                          <Button color={'Red'} title={"Remover"} />
                      </h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </React.Fragment>
  );
};

export default WishList;
                /*
                <div className="card">
                  <div className="row g-0">
                    <div className=" container row justify-content-center">
                        <div className="justify-content-center">
                            <Carrousel images={elem.img} id={idx}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{elem.name}</h5>
                            <p className="col card-text">{elem.price}</p>
                            <div className="row">
                                <Button color={'LightGreen'} title={"Reservar"} />
                            </div>
                        </div>
                    </div>
                  </div>
                  <br />
                </div>
                */

                {/*
                <div class="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                    <h4>
                        <Carrousel images={elem.img} id={idx}/>
                        <a href="Reserva.html" className="mr-4"> <span>{elem.name}</span> - R$<span>{elem.price}</span></a>               
                        <Button color={'LightGreen'} title={"Reservar"} />    
                    </h4>  
                </div>
                */}