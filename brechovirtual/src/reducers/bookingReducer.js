import jeans from '../images/jeans.jpeg'
import jeans2 from '../images/jeans2.jpeg'
const bookingReducer = (state=[
    {
      id:0,
      name: "Calça Jeans",
      seller: "Marcelo peireira",
      price: "59.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    },
    {
      id: 1,
      name: " Jeans",
      seller: " peireira",
      price: "69.99",
      date: Date(),
      location: "Tijuca",
      status: "em andamento",
      image: [jeans2],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    },
    {
      id:2,
      name: "Calça Jeans",
      seller: "Marcelo Joao ",
      price: "100.99",
      date: "01/08/2021 ",
      location: "Centro",
      status: "fechado",
      image: [jeans],
      messages: [
        {
          date: "13/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Como podemos marcar a retirada do produto?",
        },
        {
          date: "14/07/2021",
          userType: "Comprador",
          userName: "Raphael",
          message: "Podemos marcar quarta pela tarde?",
        },
        {
          date: "15/07/2021",
          userType: "Vendedor",
          userName: "Marcelo",
          message: "Tudo bem!!!",
        },
      ],
    }
],action)=>{
    return state;
}
export default bookingReducer; 