import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../public/static/images/logo2.png'

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #ccb5f7;">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} width="90" height="50" className="d-inline-block align-top" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            </nav>
        </>
    );
}