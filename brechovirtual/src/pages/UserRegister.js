import { Link } from "react-router-dom";
import { React } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productSchema } from "./ProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addUserServer } from "../slices/UserSlice";

export default function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit() {
    if (pass === passCOnfirm) {
      dispatch(addUserServer(newUser));
      alert("Cadastrado com sucesso!");
      history.push("/");
    } else {
      alert("As senhas não são iguais");
    }
  }

  function cancelButton(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <title>Cadastro Usuário</title>

      <link rel="stylesheet" type="text/css" href="../styles.css" />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />

      <div className="container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            src="../images/logo2.png"
          />
          <p id="profile-name" className="profile-name-card">
            Cadastre-se
          </p>
          <form class="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <span id="reauth-email" className="reauth-email"></span>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Nome"
              name="username"
              {...register("username")}
              required
              autofocus
            />
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="E-mail"
              name="email"
              {...register("email")}
              required
              autofocus
            />
            <input
              type="password"
              id="senha"
              className="form-control"
              placeholder="Senha"
              name="password"
              {...register("password")}
              required
              autofocus
            />
            <input
              type="password"
              id="senhaConfirmar"
              className="form-control"
              placeholder="Confirmar Senha"
              required
            />
            <a>
              <Link to="/login">Já possuo login.</Link>
            </a>
            <button className="btn  btn-primary btn-signin" type="submit">
              Cadastrar
            </button>
            <button
              className="btn  btn-primary btn-signin"
              type="submit"
              onClick={(e) => cancelButton(e)}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
