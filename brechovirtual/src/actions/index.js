export const addProduto = (product)=>{
    return{
        type: 'ADDPRODUCT',
        payload:product
    }
}
export const deleteProduct = (id)=>{
    return{
        type:'DELETEPRODUCT',
        payload:id
    }
}