import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/productContext";
import Footer from "../components/Footer";
import styles from "./ProdutoSobre.css";
import Header from "../components/Header";

function ProdutoSobre() {
  const parms = useParams();
  const [data, setData] = useState([]);
  const productContext = useContext(ProductContext);

  useEffect(() => {
    const produtoClicado = productContext.products.filter(
      (product) => product.id == parms.id
    );

    setData(produtoClicado[0]);
  }, []);

  return (
    <>
      {data && (
        <div>
          <Header title="Detalhe do Produto" />
          <div className="produtoSobre-container">
            <div className="card-horizontal">
              <img
                src={data.photo_url}
                alt={data.name}
                className="card-image"
              />
              <div className="card-details">
                <h1>{data.name}</h1>
                <p>R$ {data.price}</p>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default ProdutoSobre;
