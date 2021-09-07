import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Carrousel from "../components/carrousel";
import Chat from "../components/chat";
import Button from "../components/button";
import loading from "../images/loading.gif";
import { useParams, useHistory } from "react-router";
import {
  deleteBookingServer,
  fetchBookings,
  selectBookingById,
  updateBookingServer,
} from "../slices/BookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProductsServer,
  selectProductsById,
} from "../slices/ProductsSlice";
import { messageSchema } from "./MessageSellerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { selectSellersById } from "../slices/SellerSlice";
import Footer from "../components/footer";

export default function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    resolver: yupResolver(messageSchema), 
    defaultValues: {response: ""}
  });
  const history = useHistory();
  let { id } = useParams();
  id = parseInt(id);
  const dispatch = useDispatch();
  var booking= useSelector((state) => selectBookingById(state, id));
  var product= useSelector((state) =>
  selectProductsById(state, booking.idProduct)
);
  var seller= useSelector((state) =>
    selectSellersById(state, product.idSeller)
  );

  useEffect(() => {
    if (isSubmitSuccessful) { reset({ response: '' }); } 
  }, [isSubmitSuccessful, reset]);

  const status = useSelector((state) => state.bookings.status);
  const error = useSelector((state) => state.bookings.error);

  const status2 = useSelector((state) => state.products.status);
  const error2 = useSelector((state) => state.products.error);

  const status3 = useSelector((state) => state.sellers.status);
  const error3 = useSelector((state) => state.sellers.error);

  if (status === "loading" || status2 === "loading" || status3 === "loading") {
    return (
      <p className="h6 text-center">
        {" "}
        <img
          src={loading}
          width="30"
          height="30"
          className="d-inline-block"
          alt=""
        />{" "}
        Carregando a reserva...
      </p>
    );
  } else if (
    status === "failed" ||
    status2 === "failed" ||
    status3 === "failed"
  ) {
    return (
      <p className="h6 text-center">
        Error: {error} Error2 : {error2} Error3 : {error3}
      </p>
    );
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
    return ` ${hora}  -  ${dia}/${mes}/${ano}   -  `;
  }
  let carregando = "";
  if (status === "loading2") {
    carregando = (
      <p>
        <img
          src={loading}
          width="15"
          height="15"
          className="d-inline-block align-top"
          alt=""
        />{" "}
        Enviando a mensagem...
      </p>
    );
  }

  let buttonConclude = "";
  let buttonCancel = "";
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
      inputTextArea = (
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          name="response"
          rows="3"
          {...register("response")}
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

  function onSubmit(response) {
    const newMessage = {
      userType: "Vendedor",
      userName: seller.name,
      date: dataAtualFormatada(),
      message: response.response,
    };
    var newMessagesArray = booking.messages.concat([{ ...newMessage }]);
    dispatch(updateBookingServer({ ...booking, messages: newMessagesArray }));
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
                <Carrousel images={product.images} id={booking.id} />
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
                    <b>{product.name}</b>
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
            <b>Vendedor:</b> {seller.name}{" "}
          </p>
        </div>
        <div className="row justify-content-center">
          <p style={{ fontSize: 15 }}>
            {" "}
            <b>Telefone:</b> {seller.ddd + seller.number}{" "}
          </p>
        </div>
        <div className="row justify-content-center">
          <p style={{ fontSize: 15 }}>
            {" "}
            <b>Email:</b> {seller.email}{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col">
          <Chat messages={booking.messages} />
          <form onSubmit= {handleSubmit(onSubmit)}>
            <div>
              {carregando}
              {inputTextArea}
            </div>
            <p style={{ color: "red" }}>{errors?.response?.message}</p>
            &nbsp;
            <div className="row justify-content-center">
              <Button color={"purple"} title={"Responder"} type="submit" />
            </div>
          </form>
        </div>
      </div>
      &nbsp;
      <Footer></Footer>
    </>
  );
}