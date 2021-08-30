import { React, useState } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Button from "../components/button";
import casaco from "../images/casaco.jpg";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductsServer,
  updateProductsServer,
  selectProductsById,
} from "../ProductsSlice";

export default function ProductRegister(props) {
  const error = "Este campo é obrigatório!";
  let { id } = useParams();
  id = parseInt(id);

  const productFound = useSelector((state) => selectProductsById(state, id));

  const [newProduct, setNewProduct] = useState(id ? productFound ?? {} : {});
  const [descriptionMin, setDescriptionMin] = useState(false);
  const [descriptionMax, setDescriptionMax] = useState(false);
  const [nameMin, setNameMin] = useState(false);
  const [nameMax, setNameMax] = useState(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isPriceEmpty, setIsPriceEmpty] = useState(false);
  const [isCategoryEmpty, setIsCategoryEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  const [actionType] = useState(
    id
      ? productFound
        ? "productForm/updateProduct"
        : "productForm/addProduct"
      : "productForm/addProduct"
  );

  //const products = useSelector(state => state.products)
  const dispatch = useDispatch();
  const history = useHistory();

  function handleInputChange(e) {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  }

  function createProduct(e) {
    e.preventDefault();
    // validateValues(newProduct);
    if (actionType === "productForm/addProduct") {
      newProduct.images = [casaco];
      dispatch(addProductsServer(newProduct));
      alert("Produto cadastrado com sucesso!");
    } else {
      dispatch(updateProductsServer(newProduct));
      alert("Produto atualizado com sucesso!");
    }
    history.push("/");
  }

  function cancelButton(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <Navbar />
      <Jumbotron title={props.title} text={" "} />
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="row d-flex justify-content-center">
              <img
                id="preview"
                class="border border-dark"
                width="300"
                height="300"
                alt="Arquivo de Imagem - Em construção"
              />
            </div>
            &nbsp;
            <p>
              <div class="row justify-content-md-center">
                <div class="col-md-6 custom-file">
                  <input
                    id="img-input"
                    type="file"
                    class="custom-file-input"
                    name="images"
                  />
                  <label class="custom-file-label" for="customFile">
                    Escolher arquivo
                  </label>
                </div>
              </div>
            </p>
          </div>

          <div class="col-sm-6">
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-sm">
                  <label for="validationTooltip01">
                    <b>Título</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip01"
                    placeholder="Título do anúncio"
                    name="name"
                    value={newProduct.name}
                    onChange={(evt) => handleInputChange(evt)}
                    required
                  />
                  <div class="valid-tooltip">Tudo certo!</div>
                  {isTitleEmpty && <div color="danger">{error}</div>}
                  {nameMin && (
                    <span className="formField__error">
                      Título muito curto, escreva mais
                    </span>
                  )}
                  {nameMax && (
                    <span className="formField__error">
                      Título muito longo, máximo de 60 caracteres
                    </span>
                  )}
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <label for="validationTooltipUsername">
                    <b>Preço</b>
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text"
                        id="validationTooltipUsernamePrepend"
                      >
                        R$
                      </span>
                    </div>
                    <input
                      type="number"
                      step="0.1"
                      min="5"
                      class="form-control"
                      id="validationTooltipUsername"
                      name="price"
                      value={newProduct.price}
                      onChange={(evt) => handleInputChange(evt)}
                      required
                    />
                    <div class="invalid-tooltip">BRL</div>
                    {isPriceEmpty && (
                      <span className="formField__error">{error}</span>
                    )}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      <b>Categoria</b>
                    </label>
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      name="category"
                      value={newProduct.category}
                      onChange={(evt) => handleInputChange(evt)}
                    >
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
                    {isCategoryEmpty && (
                      <span className="formField__error">{error}</span>
                    )}
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                      <b>Descrição do anúncio</b>
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="description"
                      value={newProduct.description}
                      onChange={(evt) => handleInputChange(evt)}
                    ></textarea>
                    {isDescriptionEmpty && (
                      <span className="formField__error">{error}</span>
                    )}
                    {descriptionMin && (
                      <span className="formField__error">
                        Descrição muito curta, escreva mais
                      </span>
                    )}
                    {descriptionMax && (
                      <span className="formField__error">
                        Descrição muito longa, máximo de 150 caracteres
                      </span>
                    )}
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
          <Button
            color={"purple"}
            title={"Publicar"}
            onClick={(e) => {
              /* Validações */
              if (!newProduct.name) {
                setIsTitleEmpty(true);
              } else {
                setIsTitleEmpty(false);
                if (newProduct.name.length < 5) {
                  setNameMin(true);
                } else {
                  setNameMin(false);
                  if (newProduct.name.length > 60) {
                    setNameMax(true);
                  } else {
                    setNameMax(false);
                  }
                }
              }
              if (!newProduct.price) {
                setIsPriceEmpty(true);
              } else {
                setIsPriceEmpty(false);
              }
              if (!newProduct.description) {
                setIsDescriptionEmpty(true);
              } else {
                setIsDescriptionEmpty(false);
                if (newProduct.description.length < 30) {
                  setDescriptionMin(true);
                } else {
                  setDescriptionMin(false);
                  if (newProduct.description.length > 150) {
                    setDescriptionMax(true);
                  } else {
                    setDescriptionMax(false);
                  }
                }
              }
              if (!newProduct.category) {
                setIsCategoryEmpty(true);
              } else {
                setIsCategoryEmpty(false);
              }
              if (
                newProduct.price &&
                newProduct.category &&
                newProduct.name &&
                newProduct.description
              ) {
                createProduct(e);
              }
            }}
          />
        </div>
        <div class="col-4 d-flex justify-content-end">
          <Button
            color={"gray"}
            title={"Cancelar"}
            onClick={(e) => cancelButton(e)}
          />
        </div>
      </div>
      &nbsp;
    </>
  );
}
