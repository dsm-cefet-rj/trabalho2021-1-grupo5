import { React, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Button from "../components/button";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addSellersServer, selectSellersById, updateSellersServer } from "../slices/SellerSlice";
import Footer from "../components/footer";

export default function SellerRegister(props) {
  
  let { id } = useParams();
  id = parseInt(id);

  const sellerFound = useSelector((state) => selectSellersById(state, id));

  const [newSeller, setNewSeller] = useState(
    
    id ? sellerFound ?? {} : {}
);

  const [actionType,] = useState(
    id
      ? sellerFound
        ? "sellerForm/updateSeller"
        : "sellerForm/addSeller"
      : "sellerForm/addSeller"
  );
    let inputName = ''
    let inputEmail = ''
    let inputDocument = ''
    if (actionType === "sellerForm/updateSeller"){
      inputName = <input type="text" name="name" value={newSeller.name } onChange={handleInputChange} class="form-control" id="inputEmail4" placeholder="Nome do vendedor" readonly="readonly"/>
      inputEmail = <input type="email" name="email" value={newSeller.email} onChange={handleInputChange} class="form-control" id="inputPassword4" placeholder="E-mail" readonly="readonly"/>
      inputDocument = <input type="text" value={newSeller.document} onChange={handleInputChange} name="document" class="form-control" id="inputCPF" placeholder="Somente números" readonly="readonly"/>
    }
    else{
      inputName = <input type="text" name="name" value={newSeller.name } onChange={handleInputChange} class="form-control" id="inputEmail4" placeholder="Nome do vendedor" />
      inputEmail = <input type="email" name="email" value={newSeller.email} onChange={handleInputChange} class="form-control" id="inputPassword4" placeholder="E-mail" />
      inputDocument = <input type="text" value={newSeller.document} onChange={handleInputChange} name="document" class="form-control" id="inputCPF" placeholder="Somente números"/>
    }
  //const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  const history = useHistory();

  function handleInputChange(e){
    setNewSeller({...newSeller, [e.target.name]: e.target.value})
 }

  function createSeller(e) {
    e.preventDefault();
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
                    {inputName}
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">E-mail</label>
                    {inputEmail}
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" name="street" value={newSeller.street}  onChange={handleInputChange} class="form-control" id="inputAddress" placeholder="Rua, avenida..."/>
                </div>

                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputCPF">CPF</label>
                    {inputDocument}
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputNumberDDD">DDD</label>
                    <input type="number"name="ddd" value={newSeller.ddd} onChange={handleInputChange} class="form-control" id="inputNumberDDD" placeholder="Somente números"/>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputNumber">Telefone Celular</label>
                    <input type="number"name="number" value={newSeller.number}  onChange={handleInputChange} class="form-control" id="inputNumber" placeholder="Somente números"/>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-group col-md-5">
                    <label for="inputBairro">Bairro</label>
                    <input type="text"  onChange={handleInputChange} name="district" value={newSeller.district} class="form-control" id="inputBairro"/>
                    </div>

                    <div class="form-group col-md-5">
                    <label for="inputCity">Cidade</label>
                    <input type="text"name="city"  onChange={handleInputChange} value={newSeller.city} class="form-control" id="inputCity"/>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputEstado">Estado</label>
                    <input type="text"name="state" value={newSeller.state} onChange={handleInputChange} class="form-control" id="inputEstado" placeholder="Sigla do Estado"/>
                    </div>

                </div>
                
                <div class="row">    
              <div class="col-4 d-flex justify-content-center">
                <Button color={"purple"} title={"Cadastrar"} type="submit" onClick={(e)=>createSeller(e)}/>
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
      <Footer></Footer>
    </>
  );
}
