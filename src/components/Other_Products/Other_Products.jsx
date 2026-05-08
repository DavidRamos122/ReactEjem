import { useNavigate } from "react-router-dom";
import Other_product from "../../assets/images.jpg";
import "./Other_Products.css";

const Other_Products = () => {
  const navigate = useNavigate();

  return (
    <div className="containerUno">
      <h2>Other's Products</h2>
      <img className="imagen" src={Other_product} alt="Other's Products" />
      <button className="boton" onClick={() => navigate("/OtherProductos")}>
        Entrar
      </button>
    </div>
  );
};

export default Other_Products;
