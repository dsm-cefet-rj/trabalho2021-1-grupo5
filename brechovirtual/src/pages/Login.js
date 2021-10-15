import { React } from "react";
import { useHistory } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { loginSchema } from "./LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import '../styles.css'
import logo2 from '../images/logo2.png'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit() {
    alert("Autenticado com sucesso!");
    history.push("/");
  }

  function cancelButton(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <title>Login</title>

      <link rel="stylesheet" type="text/css" href={`../styles.css`} />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />

      <div class="container">
        <div class="card card-container">
          <img
            alt=""
            id="profile-img"
            class="profile-img-card"
            src={logo2}
          />
          <p id="profile-name" class="profile-name-card">
            Login
          </p>
          <form class="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <span id="reauth-email" class="reauth-email"></span>
            <input
              type="text"
              id="nome"
              class="form-control"
              placeholder="E-mail"
              autoComplete="true"
              name="userName"
              {...register("userName")}
              required
              autofocus
            />
            <p style={{ color: "red" }}>{errors.userName?.message}</p>

            <input
              type="password"
              id="senha"
              class="form-control"
              placeholder="Senha"
              autoComplete="false"
              name="password"
              {...register("password")}
              required
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <div id="remember" class="checkbox">
              <label>
                <input type="checkbox" value="remember-me" /> Lembrar
              </label>
            </div>
            <button class="btn btn-primary btn-signin" type="submit">
              Entrar
            </button>
            <button
              class="btn btn-primary btn-signin"
              type="submit"
              onClick={(e) => cancelButton(e)}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
      ></script>
    </>
  );
}