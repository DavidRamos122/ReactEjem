// Aqui mport0 el hook useNavigate de react-router-dom para manejar la navegación
import { useNavigate } from "react-router-dom";
import productosWomen from "../../assets/Products_Women.png";
import "./Women_Clothing.css";

//=============Este es mi componente Women'sProducts===============//
const Women_Clothing = () => {
  const navigate = useNavigate();

  return (
    // Contenedor principal con clase para aplicar estilos
    <div className="containerUno">
      <h2>Women's Products</h2>
      <img className="imagen" src={productosWomen} alt="Women's Products" />

            {/* Este es el boton que al hacer clic navega a la ruta definida en el navigate*/}
      <button className="boton" onClick={() => navigate("/ProductsWomen")}>
        Entrar
      </button>
    </div>
  );
};

export default Women_Clothing;
