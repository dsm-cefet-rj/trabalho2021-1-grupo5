import React, { useEffect } from 'react';
import Navbar from '../components/navbar'
import Carrousel from '../components/carrousel'
import Jumbotron from '../components/jumbotron'
import heart from '../images/heart.png';
import loading from "../images/loading.gif"
import Button from '../components/button';
import { Link, useHistory , useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {  deleteProductsServer, fetchProducts, selectProductsById, updateProductsServer } from '../ProductsSlice';
import {addBookingServer, selectALLBookings } from '../BookingsSlice';




export default function Seller(){
    const history = useHistory()
    let { id } = useParams()
    id = parseInt(id)
     
    const seller = useSelector(state=>selectSellersById(state,id))
     const status = useSelector(state=>state.sellers.status)
     const error = useSelector(state=>state.sellers.error)
     
     const dispatch = useDispatch();
   if (status === 'loading'){
    return (<p className="h6 text-center"> <img src={loading} width="15" height="15" className="d-inline-block align-top" alt=""/> Carregando informações do vendedor...</p>)
  }else if (status === 'failed'){
    return(<p className="h6 text-center">Error: {error}</p>)
  }





   




    function handleDelete(e){
        e.preventDefault()
        dispatch(deleteSellersServer(id));
        alert("Vendedor excluído!")
        history.push("/")
    }

    return(
        <>
            <Navbar/>
            <Jumbotron title={seller.name} text={}/>
            <div class="container">
            <div class="row d-flex justify-content-center">

            
            
            <div class="col-sm-6">
                <form class="needs-validation" novalidate>

                <div class="row">
                    <div class="col-sm">
                    <Link to={`/sellerForm/${seller.id}`}><p>Editar</p></Link> 
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome</label>
                    <p></p>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">E-mail</label>
                    <p></p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <p></p>
                </div>

                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputCPF">CPF</label>
                    <p></p>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputNumberDDD">DDD</label>
                    <p></p>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputNumber">Telefone Celular</label>
                    <p></p>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-group col-md-5">
                    <label for="inputBairro">Bairro</label>
                    <p></p>
                    </div>

                    <div class="form-group col-md-5">
                    <label for="inputCity">Cidade</label>
                    <p></p>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputEstado">Estado</label>
                    <p></p>
                    </div>

                </div>

                

                

                <div class="row">
                    <div class="col">
                        <Button color={'Red'} title={"Excluir"} onClick={handleDelete}/>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>


        </>
    );
}
