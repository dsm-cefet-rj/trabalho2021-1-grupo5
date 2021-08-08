import React from 'react';
import ReactDOM from 'react-dom';
import heart from '../images/heart.png'
import Carrousel from '../components/carrousel'


export default function Card(props) {
    return(
        <>
        <div className="col-sm-4 d-flex justify-content-center">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded bd-highlight justify-content-center" style="width: 20rem;">
                <div className="text-center">
                    <Carrousel images={props.product.images}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a href="produto.html" >{props.product.name}</a> <span className="text-right">R${props.product.price}</span></h5>
                    <p className="card-text">{props.product.description}</p>
                    <div className="text-left">
                        <h6><b>{props.product.category}</b></h6>
                    </div>
                    <div className="text-right">
                        <a  href="desejos.html" > 
                            <img src={heart} width="15" height="15" className="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     
      </>
    );
}