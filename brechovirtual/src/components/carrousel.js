import React from 'react';
import ReactDOM from 'react-dom';

export default function Carrousel(props){
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                  {props.images.map((image)=>{
                      return (
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={image.src} width="200" height="200" alt="Primeiro Slide"/>
                            </div>)
                  })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Próximo</span>
                </a>
            </div>
        </>
    );
}