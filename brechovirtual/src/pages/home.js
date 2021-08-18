import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import logo from "../images/logo2.png";

export default function Home(props) {
  const renderProdcuct = (product) => {
    return (
      <React.Fragment>
        {product.status !== "reservado" && (
          <Card product={product} key={product.name} />
        )}
      </React.Fragment>
    );
  };
  return (
    <>
      <Navbar />
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container">
          <div class="row justify-content-center">
            <img
              src={logo}
              width="300"
              height="150"
              class="d-inline-block align-top"
              alt=""
            />
          </div>
          <div class="row justify-content-center">
            <p class="lead">
              Seu site para vendas e trocas de peças de roupas.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">{props.products.map(renderProdcuct)}</div>
      </div>
    </>
  );
}
