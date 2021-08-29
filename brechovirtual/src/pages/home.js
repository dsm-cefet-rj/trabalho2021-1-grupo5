import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import Navbar from "../components/navbar";
import logo from "../images/logo2.png";
import { fetchProducts, selectAllProducts } from "../ProductsSlice";

export default function Home(props) {
  //const products = useSelector(state=>state.products)
  const products = useSelector(selectAllProducts)
  const status = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)
  const dispatch = useDispatch();

  const renderProduct = (product) => {
    return (
      <React.Fragment>
        {product.status !== "reservado" && (
          <Card product={product} key={product.name} />
        )}
      </React.Fragment>
    );
  };

  useEffect(() => {
    if(status === 'not loaded'){
      dispatch(fetchProducts());
    }/*else if(status === 'not loaded'){
      setTimeout(() => dispatch(fetchProducts()), 5000)
    }*/
  }, [status, dispatch])

  let productList = '';
  if(status === 'loaded' || status === 'saved' || status==='deleted'){
    productList = products.map(renderProduct);
  }else if (status === 'loading'){
    productList = <div>Carregando lista de produtos...</div>;
  }else if (status === 'failed'){
    productList = <div>Error: {error}</div>;
  }

  

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
        <div className="row">{productList}</div>
      </div>
    </>
  );
}
