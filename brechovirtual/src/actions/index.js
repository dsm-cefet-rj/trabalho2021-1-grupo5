export function addProduct(novoProduto){
  return({
      type:"ADDPRODUCT",
      payload:novoProduto,
  })  
}
export function deleteProduct()
