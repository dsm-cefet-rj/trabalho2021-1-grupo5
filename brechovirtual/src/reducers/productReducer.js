import jeans from "../images/jeans.jpeg";
import jeans2 from "../images/jeans2.jpeg";
import casaco from "../images/casaco.jpg";
import casaco2 from "../images/casaco2.jpg";
const productReducer = (state = [
    {
        id: 0,
        name: "Calça Jeans",
        images: [jeans, jeans2],
        description: "This is a pretty new black jean without any real damage",
        price: 56.99,
        status: "aberto",
        category: "Calças",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 1,
        name: "Casaco",
        images: [casaco, casaco2],
        description: "This is a pretty new black jean without any real damage",
        price: 99.63,
        status: "aberto",
        category: "Casaco",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      ],action)=>{
    if(action.type === "ADDPRODUCT"){
        return(state.concat(action.payload))
    }
    else if(action.type ==="DELETEPRODUCT"){
        console.log("Delete product called")
        return state.filter((state)=>state.id !== action.payload)
    
    }
    return state;
}
export default productReducer; 