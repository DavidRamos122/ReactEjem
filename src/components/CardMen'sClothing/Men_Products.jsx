import { useNavigate } from "react-router-dom";
import productosHombre from "../../assets/ProductosHombre.png";
import "./Men_Products.css";

const Men_Products = () => {
  const navigate = useNavigate();

  return (
    <div className="containerUno">
      <h2>Men's Products</h2>
      <img className="imagen" src={productosHombre} alt="Men's Products" />
      <button className="boton" onClick={() => navigate("/productosHombre")}>
        Entrar
      </button>
    </div>
  );
};

export default Men_Products;
