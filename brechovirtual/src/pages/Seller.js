import React from 'react';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import loading from "../images/loading.gif"
import { Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { selectSellersById } from '../slices/SellerSlice';




export default function Seller(){
    let { id } = useParams()
    id = parseInt(id)
     
    const seller = useSelector(state=>selectSellersById(state,id))
     const status = useSelector(state=>state.sellers.status)
     const error = useSelector(state=>state.sellers.error)
   if (status === 'loading'){
    return (<p className="h6 text-center"> <img src={loading} width="15" height="15" className="d-inline-block align-top" alt=""/> Carregando informações do vendedor...</p>)
  }else if (status === 'failed'){
    return(<p className="h6 text-center">Error: {error}</p>)
  }

    return(
        <>
            <Navbar/>
            <Jumbotron title={seller.name} text={""}/>
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
                    <p>{seller.name}</p>
                    </div>

                    <div class="form-group col-md-6">
                    <label for="inputPassword4">E-mail</label>
                    <p>{seller.email}</p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <p>{seller.address.street}</p>
                </div>

                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputCPF">CPF</label>
                    <p>{seller.document}</p>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputNumberDDD">DDD</label>
                    <p>{seller.telephone.ddd}</p>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputNumber">Telefone Celular</label>
                    <p>{seller.telephone.number}</p>
                    </div>

                </div>

                <div class="form-row">

                    <div class="form-group col-md-5">
                    <label for="inputBairro">Bairro</label>
                    <p>{seller.address.district}</p>
                    </div>

                    <div class="form-group col-md-5">
                    <label for="inputCity">Cidade</label>
                    <p>{seller.address.city}</p>
                    </div>

                    <div class="form-group col-md-2">
                    <label for="inputEstado">Estado</label>
                    <p>{seller.address.state}</p>
                    </div>

                </div>
                </form>
            </div>
        </div>
        </div>


        </>
    );
}
