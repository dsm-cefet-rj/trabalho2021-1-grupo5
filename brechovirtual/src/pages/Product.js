import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Carrousel from '../components/carrousel'
import Jumbotron from '../components/jumbotron'
import jeans from '../images/jeans.jpeg';
import jeans2 from '../images/jeans2.jpeg';
import heart from '../images/heart.png';
import Button from '../components/button';
import { Link,useHistory , useParams} from 'react-router-dom';
import { Redirect } from 'react-router';




export default function Product(props){
    const history =useHistory()
    let { id} = useParams()
    const product = props.products[id]
    //props.products.filter((product)=>product.id === props.id)

    function handleReserve(event){
        const booking =  {
          "name" : product.name,
          "seller" : product.seller,
          "price" : product.price,
          "date": Date(),
          "location": product.location,
          "status": "em andamento",
          "image":[jeans],
      }
      props.setBooking([...props.bookings,booking])
      event.preventDefault()
      alert("Produto adicionado à lista de reserva.")
    }
    function handleDelete(event){
        props.products.splice(props.products.indexOf(id),1)
        props.setProduct([...props.products])
        event.preventDefault()
        alert("Produto excluido")
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
                            <Link to={"/WishList"}> 
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