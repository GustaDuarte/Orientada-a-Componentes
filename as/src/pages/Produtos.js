import { useContext, useEffect } from "react";
import Header from "../components/Header";
import styles from "./Produtos.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/productContext";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";

function Produtos() {
  const [data, request] = useFetch("http://localhost:3001/products");
  const productContext = useContext(ProductContext);
  productContext.setProduct(data);

  const navigate = useNavigate();

  useEffect(() => {
    request();
  }, [request]);

  function handleClick(id) {
    navigate(`${id}`);
  }

  return (
    <div>
      <Header title="Produtos"/>

      <div className="card-container">
        {data &&
          data.map((product) => (
            <div key={product.id} className="card" onClick={() => handleClick(product.id)}>
              <img src={product.photo_url} alt="" />
              <div className="card-details">
                <p>{product.name}</p>
                <p>R$ {product.price}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Produtos;
