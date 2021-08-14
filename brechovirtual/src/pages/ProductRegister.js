import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron';
import Button from '../components/button';


export default function ProductRegister(props){
    function handleInputChange(event){
        const target = event.target
        const name = event.target.name;
    switch (name) {
        case "name":
            setNewProduct({ [name]: event.target.value})
            break;
        case "description":
            setNewProduct
        default:
            break;
    }
    }
    const [newProduct, setNewProduct] = useState({
        "name" : "",
        "images": null,
        "description": "",
        "price": 0,
        "category": "Escolher..."
    });
    
    function createProduct(e){
        e.preventDefault();
        props.setProduct({...props.product, newProduct});  
    }
    return(
        <>
            <Navbar/>
            <Jumbotron title={"Cadastrar Produto"} text={" "}/>
            
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row d-flex justify-content-center">
                           <img class="border border-dark" src="" width="200" height="200" alt="Arquivo de Imagem"/>
                        </div>
                    &nbsp;
                        <p>
                            <div class="row justify-content-md-center">
                                <div class="col-md-6 custom-file">
                                <input type="file" class="custom-file-input" id="customFile"/>
                                <label class="custom-file-label" for="customFile">Escolher arquivo</label>
                                </div>
                            </div>
                        </p>
                </div>

                    <div class="col-sm-6">
                        <form class="needs-validation" novalidate>

                            <div class="row">
                                <div class="col-sm">
                                <label for="validationTooltip01"><b>Título</b></label>
                                <input type="text" class="form-control" id="validationTooltip01" placeholder="Título do anúncio" value={newProduct.name} onChange={} required/>
                                <div class="valid-tooltip">
                                    Tudo certo!
                                </div>
                                </div>
                            </div>

                             <div class="row">
                                <div class="col-sm-6">
                                    <label for="validationTooltipUsername"><b>Preço</b></label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="validationTooltipUsernamePrepend">R$</span>
                                        </div>
                                            <input type="number" step="0.01" min="0.01"class="form-control" id="validationTooltipUsername" value={newProduct.price} required/>
                                        <div class="invalid-tooltip">
                                            BRL
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1"><b>Categoria</b></label>
                                        <select class="form-control" id="exampleFormControlSelect1" value={newProduct.category}>
                                        <option>Escolher...</option>
                                        <option>Camisa</option>
                                        <option>Casaco</option>
                                        <option>Calça</option>
                                        <option>Chapéu</option>
                                        <option>Calçado</option>
                                        <option>Cachecol</option>
                                        <option>Vestido</option>
                                        <option>Macacão</option>
                                        <option>Óculos</option>
                                        <option>Meia</option>
                                        <option>Saia</option>
                                        <option>Outros</option>
                                        </select>
                                    </div>
                                <div class="invalid-tooltip">
                                    Por favor, selecione uma categoria.
                                </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1"><b>Descrição do anúncio</b></label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={newProduct.description}></textarea>
                                    </div>
                                    <div class="invalid-tooltip">
                                    Por favor, informe a descrição do anúncio.
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            &nbsp;
           
            <div class="row">  
                <div class="col-4 d-flex justify-content-end">
                    <Button color={'purple'} title={"Publicar"} onClick={()=>createProduct()}/> 
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <Button color={'gray'} title={"Cancelar"}/> 
                </div>
            </div>
            &nbsp;
        </>
    );
}