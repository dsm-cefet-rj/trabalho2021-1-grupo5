import { React } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/UserSlice";
import { useHistory } from "react-router";

export default function Dropdown(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  function handleLogOut(e) {
    alert("logging out")
    dispatch(logout())
    history.push("/")
  }
  return (
    <>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <div>
          <img
            src={props.avatar}
            alt=""
            class="rounded-circle"
            width="40"
            height="40"
          />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.menu}
            </a>
            <div
              className="dropdown-menu pull-left"
              style={{ right: "0", left: "auto" }}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item">
                <Link to="/login">Login</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/userRegister">Cadastrar</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/">Perfil</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/productForm/new">Criar anúncio</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/bookingList">Lista de Reservas</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/sellerForm/new">Criar Perfil Vendedor</Link>
              </a>
              <a className="dropdown-item">
                <Link to="/seller/6147b3288bb39ea8acd78dbc">
                  Perfil Vendedor
                </Link>
              </a>
              <a className="dropdown-item">
                <Link to="/wishList">Lista de Desejos</Link>
              </a>
              <button className="dropdown-item" onClick={handleLogOut}>
                <Link to="/">Sair</Link>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
