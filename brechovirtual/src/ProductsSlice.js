import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import jeans from "./images/jeans.jpeg";
import jeans2 from "./images/jeans2.jpeg";
import casaco from "./images/casaco.jpg";
import casaco2 from "./images/casaco2.jpg";
import tenis from "./images/tenis.jpeg";
import tenis2 from "./images/tenis2.jpeg";
import vestido from "./images/vestido-rosa2.jpg";
import vestido2 from "./images/vestido-rosa.jpg";


const initialProducts = []
/*const initialProducts = [
      {
        id: 1,
        name: "Calça Jeans",
        images: [jeans, jeans2],
        description: "This is a pretty new black jean without any real damage",
        price: 56.99,
        status: "aberto",
        category: "Calça",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 2,
        name: "Casaco",
        images: [casaco, casaco2],
        description: "This is a pretty new black jean without any real damage",
        price: 99.63,
        status: "aberto",
        category: "Casaco",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 3,
        name: "Tênis",
        images: [tenis, tenis2],
        description: "This is a pretty new black Tenis without any real damage",
        price: 51.0,
        status: "reservado",
        category: "Tênis",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
      {
        id: 4,
        name: "Vestido rosa",
        images: [vestido, vestido2],
        description: "This is a pretty new pink dress from switzerland",
        price: 89.95,
        status: "aberto",
        category: "Vestido",
        seller: "Marcelo peireira",
        location: "Tijuca",
      },
    ];*/
    
  function addProductReducer(products, product){
    let proxId = 1 + products.map(product => product.id).reduce((x, y) => Math.max(x,y));
    return products.concat([{...product, id: proxId}]);
  }

  function deleteProductReducer(products, id){
    return products.filter((product) => product.id !== id);  
  }

  function updateProductReducer(products, product){
    let index = products.map(product => product.id).indexOf(product.id);
    products.splice(index, 1, product);
    return products;
  }

  export const fetchProducts = createAsyncThunk('database/fetchProducts',
    async () => {
        return await (await fetch ('http://localhost:3004/products')).json();
    }
  );

  function fullfillProductsReducer(productsState, productsFetched){
      return productsFetched;
  }

  export const productsSlice = createSlice({
        name: "products",
        initialState: initialProducts,
        reducers: {
           addProduct: (state, action) => addProductReducer(state, action.payload),
           updateProduct: (state, action) => updateProductReducer(state, action.payload),
           deleteProduct: (state, action) => deleteProductReducer(state, action.payload)
        },
        extraReducers: {
             [fetchProducts.fulfilled]: (state, action) => fullfillProductsReducer(state, action.payload),
        }
    })

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions
export default productsSlice.reducer
    