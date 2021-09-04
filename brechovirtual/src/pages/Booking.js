import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Carrousel from "../components/carrousel";
import Chat from "../components/chat";
import Button from "../components/button";
import loading from "../images/loading.gif"
import { useParams, useHistory } from "react-router";
import {
  deleteBookingServer,
  fetchBookings,
  selectBookingById,
  updateBookingServer,
} from "../BookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, updateProductsServer } from "../ProductsSlice";

export default function Booking() {
  //  const bookings = useSelector(selectAll)
  const [message, setMessage] = useState("");
  const [msgEmpty, setMsgEmpty] = useState(false);
  const [msgMin, setMsgMin] = useState(false);
  const [msgMax, setMsgMax] = useState(false);
  const history = useHistory();
  let { id } = useParams();
  id = parseInt(id);
  const dispatch = useDispatch();
  var booking = useSelector((state) => selectBookingById(state, id));
  const status = useSelector((state)=>state.bookings.status)
  const error = useSelector((state)=>state.bookings.error)
  const status2 = useSelector((state)=>state.products.status)
  const error2 = useSelector((state)=>state.products.error)
  var products = useSelector(selectAllProducts);
  if (status === 'loading'|| status2 === 'loading'){
    return (<p className="h6 text-center"> <img src={loading} width="15" height="15" className="d-inline-block align-top" alt=""/> Carregando a reserva...</p>)
  }else if (status === 'failed' || status2 === 'failed'){
    return(<p className="h6 text-center">Error: {error} Error2 : {error2}</p>)
  }
  var product = products.filter((product) => product.name === booking.name)[0];
 
  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  function dataAtualFormatada() {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    let data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear(),
      hora = [data.getHours(), data.getMinutes()].map(pad).join(":");
    return `${dia}/${mes}/${ano} ${hora} - `;
  }
  let carregando = '';
  if(status === 'loading2'){
    carregando = <p><img src={loading} width="15" height="15" className="d-inline-block align-top" alt=""/> Enviando a mensagem...</p>
  }

  let buttonConclude = "";
  let buttonCancel = "";
  let buttonAnswer = "";
  let inputTextArea = "";
  if (booking) {
    if (booking.status !== "fechado") {
      buttonConclude = (
        <Button
          color="LightGreen"
          title={"Concluir Reserva"}
          onClick={handleConclude}
        />
      );
      buttonCancel = (
        <Button color="red" title={"Cancelar Reserva"} onClick={handleDelete} />
      );
      buttonAnswer = (
        <Button
          color="purple"
          onClick={() => {
            if (message === "") {
              setMsgEmpty(true);
            } else {
              setMsgEmpty(false);
            }
            if (message.length < 3) {
              if (message === "") {
                setMsgEmpty(true);
              } else {
                setMsgEmpty(false);
                setMsgMin(true);
              }
            } else {
              setMsgMin(false);
            }
            if (message.length > 150) {
              setMsgMax(true);
            } else {
              setMsgMax(false);
            }
            if (message.length >= 3 && message.length <= 150) {
              handleClick();
            }
          }}
          title={"Responder"}
        />
      );
      inputTextArea = (
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={handleInputChange}
          value={message}
          rows="3"
        ></textarea>
      );
    }
  }

  function handleDelete(e) {
    //bookings.splice(product.id,1)
    //setProduct([...bookings])
    e.preventDefault();
    dispatch(deleteBookingServer(id));
    dispatch(updateProductsServer({ ...product, status: "aberto" }));
    alert("Reserva excluida.");
    history.push("/bookingList");
  }
  function handleConclude(event) {
    event.preventDefault();
    dispatch(updateBookingServer({ ...booking, status: "fechado" }));
    alert("Reserva concluida. ");
    history.push("/bookingList");
    //desabilitar botões disabled
  }

  function handleClick() {
    const newMessage = {
      userType: "Vendedor",
      userName: "Marcelo",
      date: dataAtualFormatada(),
      message: message,
    };
    var newMessagesArray = booking.messages.concat([{ ...newMessage }]);
    dispatch(updateBookingServer({ ...booking, messages: newMessagesArray }));
    setMessage("");
  }

  return (
    <>
      <Navbar />
      <Jumbotron
        title={`Reserva nº ${booking.id} - ${booking.status}`}
        text={" "}
      />
      <div className="container justify-content-md-center">
        <div className="row justify-content-center ">
          <div className="col justify-content-center ">
            <div className="row justify-content-center">
              <div className="justify-content-center">
                <Carrousel images={booking.image} id={booking.id} />
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-6 custom-file"></div>
            </div>
          </div>
          <div className="col">
            <div className="form-row">
              <div className="col-md-7 mb-3">
                <label for="validationTooltip01">
                  <h2>
                    <b>{booking.name}</b>
                  </h2>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-3 mb-3">
                <label>
                  <b>Preço: </b>
                </label>
                <label> R${product.price}</label>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3 mb-3">
                <label>
                  <b>Categoria: </b>
                </label>
                <label>{product.category}</label>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-7 mb-3">
                <label>
                  <b>Descrição: </b>
                </label>
                <label>{product.description}</label>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-7  mb-3">
                {buttonConclude}
                {buttonCancel}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <p style={{ fontSize: 15 }}>
            {" "}
            <b>Vendedor:</b> {booking.seller}{" "}
          </p>
        </div>
        <div className="row justify-content-center">
          <p style={{ fontSize: 15 }}>
            {" "}
            <b>Telefone:</b> {booking.telephone}{" "}
          </p>
        </div>
        <div className="row justify-content-center">
          <p style={{ fontSize: 15 }}>
            {" "}
            <b>Email:</b> {booking.email}{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col">
          <Chat messages={booking.messages} />
          <div>{carregando}{inputTextArea}</div>
          {msgMin && (
            <span style={{ color: "red" }}>
              Mensagem muito curta, escreva mais
            </span>
          )}
          {msgMax && (
            <span style={{ color: "red" }}>
              Mensagem muito longa, máximo de 150 caracteres
            </span>
          )}
          {msgEmpty && (
            <span style={{ color: "red" }}>
              Não é possível enviar uma resposta vazia
            </span>
          )}
        </div>
      </div>
      &nbsp;
      <div className="row justify-content-center">{buttonAnswer}</div>
    </>
  );
}
