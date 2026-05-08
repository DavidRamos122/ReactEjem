import { useNavigate } from "react-router-dom";
import productosWomen from "../../assets/Products_Women.png";
import "./Women_Clothing.css";

const Women_Clothing = () => {
  const navigate = useNavigate();

  return (
    <div className="containerUno">
      <h2>Women's Products</h2>
      <img className="imagen" src={productosWomen} alt="Women's Products" />
      <button className="boton" onClick={() => navigate("/ProductsWomen")}>
        Entrar
      </button>
    </div>
  );
};

export default Women_Clothing;
