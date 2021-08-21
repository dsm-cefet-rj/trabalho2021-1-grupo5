import {React} from 'react';
import {Link, Route, useRouteMatch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/Product';
import ProductRegister from '../pages/ProductRegister';
import WishList from '../pages/WishList';
import Booking from '../pages/Booking';
import BookingList from '../pages/BookingList';

export default function Dropdown(props){
    let { path, url } = useRouteMatch();
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
                    <div className="dropdown-menu pull-left" style={{right: "0", left: "auto"}} aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item"><Link to='/'>Perfil</Link></a>
                            <a className="dropdown-item" ><Link to='/productForm/novo'>Criar anúncio</Link></a>
                            <a className="dropdown-item" ><Link to='/bookingList'>Lista de Reservas</Link></a>
                            <a className="dropdown-item" ><Link to='/wishList'>Lista de Desejos</Link></a>
                            <a className="dropdown-item" ><Link to='/'>Sair</Link></a>
                    </div>
                    </li>
                </ul>
            </div>
            
        </>
    );
}