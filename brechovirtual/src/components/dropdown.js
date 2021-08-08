import React from 'react';
import ReactDOM from 'react-dom';

export default function Dropdown(props){
    return(
        <>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
	            <div>
		            <img src={props.avatar} alt="" class="rounded-circle" width="40" height="40"/>
	            </div>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.menu}
                    </a>
                    <div className="dropdown-menu pull-left" style="right: 0; left: auto;" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Perfil</a>
                        <a className="dropdown-item" href="cadastro.html">Criar anúncio</a>
                        <a className="dropdown-item" href="desejos.html">Lista de Desejos</a>
                        <a className="dropdown-item" href="listaReservas.html">Lista de Reservas</a>
                        <a className="dropdown-item" href="#">Sair</a>
                    </div>
                    </li>
                </ul>
            </div>
        
        </>
    );
}