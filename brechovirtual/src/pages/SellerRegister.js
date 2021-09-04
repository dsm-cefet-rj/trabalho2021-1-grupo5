import { React, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Button from "../components/button";
import casaco from "../images/casaco.jpg";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductsServer,
  updateProductsServer,
  selectProductsById,
} from "../ProductsSlice";
import { productSchema } from "./ProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function SellerRegister() {
  
  let { id } = useParams();
  id = parseInt(id);

  const sellerFound = useSelector((state) => selectSellersById(state, id));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const [sellerOnLoad] = useState(
    id ? sellerFound ?? sellerSchema.cast({}) : sellerSchema.cast({})
  );

  const [actionType] = useState(
    id
      ? sellerFound
        ? "sellerForm/updateSeller"
        : "sellerForm/addSeller"
      : "sellerForm/addSeller"
  );

  //const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(newSeller) {
    console.log(newSeller);
    if (actionType === "sellerForm/addSeller") {
      dispatch(addSellersServer(newSeller));
      alert("Vendedor cadastrado com sucesso!");
    } else {
      dispatch(updateSellersServer({ ...newSeller, id: sellerFound.id }));
      alert("Vendedor atualizado com sucesso!");
    }
    history.push("/");
  }

  function cancelButton(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <Navbar />
      <Jumbotron title={props.title} text={" "} />
      <div class="container">
            <form>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Nome do vendedor"/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">E-mail</label>
                    <input type="email" class="form-control" id="inputPassword4" placeholder="E-mail"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputCPF">CPF</label>
                    <input type="number" class="form-control" id="inputCPF"/>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputNumberDDD">DDD</label>
                    <input type="number" class="form-control" id="inputNumberDDD"/>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputNumber">Telefone Celular</label>
                    <input type="number" class="form-control" id="inputNumber"/>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-group col-md-5">
                    <label for="inputBairro">Bairro</label>
                    <input type="text" class="form-control" id="inputBairro"/>
                    </div>

                    <div class="form-group col-md-5">
                    <label for="inputCity">Cidade</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputEstado">Estado</label>
                    <input type="text" class="form-control" id="inputEstado"/>
                    </div>

                </div>
                
              <div class="d-flex justify-content-end">
                <Button color={"purple"} title={"Cadastrar"} type="submit" />
              </div>
             
            </form>
           
      </div>
      
      &nbsp;
      <div class="row">
        <div class="col-4 d-flex justify-content-end">
          <Button
            color={"gray"}
            title={"Cancelar"}
            onClick={(e) => cancelButton(e)}
          />
        </div>
      </div>
      &nbsp;
    </>
  );
}
