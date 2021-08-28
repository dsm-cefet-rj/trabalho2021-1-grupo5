import React from 'react';
import Navbar from '../components/navbar'
import Carrousel from '../components/carrousel'
import Jumbotron from '../components/jumbotron'
import heart from '../images/heart.png';
import Button from '../components/button';
import { Link, useHistory , useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { deleteProductsServer, selectAllProducts } from '../ProductsSlice';
import { addBooking } from '../BookingsSlice';




export default function Product(){
    const history = useHistory()
    let { id } = useParams()
    id = parseInt(id)

     const products = useSelector(selectAllProducts)
     const status = useSelector(state => state.products.status);
     const error = useSelector(state => state.products.error);

     const product = products.filter(product=>product.id === id)[0]
     const bookings = useSelector(state => state.bookings)
     const dispatch = useDispatch();

     function dataAtualFormatada(){
        function pad(s) {
            return (s < 10) ? '0' + s : s;
        }
        let data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear(),
            hora = [data.getHours(), data.getMinutes()].map(pad).join(':');
        return `${dia}/${mes}/${ano} ${hora} - `;
    }

    function handleReserve(e){
        const booking =  {
          "id":bookings.length,
          "name" : product.name,
          "seller" : product.seller,
          "price" : product.price,
          "date": dataAtualFormatada(),
          "location": product.location,
          "status": "em andamento",
          "image":product.images,
          "messages":[],
      }
      dispatch(addBooking(booking));
      e.preventDefault()
      alert("Produto adicionado à lista de reserva.")
      history.push("/bookingList")
    }

    function handleDelete(e){
        e.preventDefault()
        dispatch(deleteProductsServer(id));
        alert("Produto excluido!")
        history.push("/")
    }

    return(
        <>
            <Navbar/>
            <Jumbotron title={product.name} text={"Anunciante: "+product.seller}/>
            <div class="container">
            <div class="row d-flex justify-content-center">

            <div class="col-sm-6">
                <div class="row d-flex justify-content-center">
                    <Carrousel images={product.images} id={product.id} />
                </div>
            </div>
            
            <div class="col-sm-6">
                <form class="needs-validation" novalidate>

                <div class="row">
                    <div class="col-sm">
                    <Link to={`/productForm/${product.id}`}><p>Editar</p></Link> 
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm">
                    <label><b>Título</b></label>
                    <p>{product.name}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                    <label><b>Preço</b></label>
                    <p><span>R$ </span><span>{product.price}</span></p>
                    </div>
                    <div class="col-sm-6">
                    <div class="form-group">
                        <label><b>Categoria</b></label>
                        <p>{product.category}</p>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm">
                    <div class="form-group">
                        <label><b>Descrição do anúncio</b></label>
                        <p>{product.description}</p>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                            <Link to={"/wishList"}> 
                                <img src={heart} width="30" height="30" class="d-inline-block " alt="" title='Lista de Desejos'/>
                            </Link>
                    </div>
                    <div class="col">
                        <Button color={'LightGreen'} title={"Reservar"} onClick={handleReserve}/> 
                        <Button color={'Red'} title={"Excluir"} onClick={handleDelete}/>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>

            &nbsp;

            <div class="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-center">
            <div class='container'>
                <div class="row d-flex justify-content-center">
                <p><b>Vendedor: </b>{product.seller}</p>
                </div>
                <div class="row d-flex justify-content-center">
                <p><b>Bairro: </b>{product.branch}</p>
                </div>
                <div class="row d-flex justify-content-center"> 
                <p><b>Telefone: </b>{product.telephone}</p>
                </div>
                <div class="row d-flex justify-content-center">  
                <p><b>E-mail: </b>{product.email}</p>
                </div>
            </div>  
            </div>
        </>
    );
}
//TODO resolve Redirect