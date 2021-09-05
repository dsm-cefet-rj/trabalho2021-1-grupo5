import { React, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Button from "../components/button";
import casaco from "../images/casaco.jpg";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productSchema } from "./ProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addSellersServer, selectSellersById, updateSellersServer } from "../slices/SellerSlice";

export default function SellerRegister(props) {
  
  let { id } = useParams();
  id = parseInt(id);

  const sellerFound = useSelector((state) => selectSellersById(state, id));
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
            <form onSubmit={onSubmit}>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome</label>
                    <input type="text" name="name" defaultValue={sellerFound.name } class="form-control" id="inputEmail4" placeholder="Nome do vendedor"/>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">E-mail</label>
                    <input type="email" name="email" defaultValue={sellerFound.email} class="form-control" id="inputPassword4" placeholder="E-mail"/>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" name="address.street" defaultValue={sellerFound.address.street} class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputCPF">CPF</label>
                    <input type="text" defaultValue={sellerFound.document} name="document" class="form-control" id="inputCPF"/>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputNumberDDD">DDD</label>
                    <input type="number"name="telephone.ddd" defaultValue={sellerFound.telephone.ddd} class="form-control" id="inputNumberDDD"/>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputNumber">Telefone Celular</label>
                    <input type="number"name="telephone.number" defaultValue={sellerFound.telephone.number} class="form-control" id="inputNumber"/>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-group col-md-5">
                    <label for="inputBairro">Bairro</label>
                    <input type="text" defaultValue={sellerFound.address.district} name="address.district" class="form-control" id="inputBairro"/>
                    </div>

                    <div class="form-group col-md-5">
                    <label for="inputCity">Cidade</label>
                    <input type="text"name="address.city" defaultValue={sellerFound.address.city} class="form-control" id="inputCity"/>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputEstado">Estado</label>
                    <input type="text"name="address.state" defaultValue={sellerFound.address.state} class="form-control" id="inputEstado"/>
                    </div>

                </div>
                
                <div class="row">    
              <div class="col-4 d-flex justify-content-center">
                <Button color={"purple"} title={"Cadastrar"} type="submit" />
              </div>
              <div class="col-4 d-flex justify-content-end">
                <Button
                  color={"gray"}
                  title={"Cancelar"}
                  onClick={(e) => cancelButton(e)}
                />
              </div>
              </div> 
             
            </form>
           
      </div>
      
      &nbsp;
      
      &nbsp;
    </>
  );
}
