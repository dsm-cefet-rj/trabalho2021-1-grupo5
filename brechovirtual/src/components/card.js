import React from 'react';
import ReactDOM from 'react-dom';
import heart from '../../public/static/images/heart.png'


export default function card(props) {
    return(
        <>
        <div className="col-sm-4 d-flex justify-content-center">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded bd-highlight justify-content-center" style="width: 20rem;">
                <div className="text-center">
                
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a href="produto.html" >{props.name}</a> <span className="text-right">R${props.price}</span></h5>
                    <p className="card-text">{props.description}</p>
                    <div className="text-left">
                        <h6><b>{props.category}</b></h6>
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