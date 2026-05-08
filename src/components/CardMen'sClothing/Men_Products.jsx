// Aqui mport0 el hook useNavigate de react-router-dom para manejar la navegación
import { useNavigate } from "react-router-dom";
import productosHombre from "../../assets/ProductosHombre.png";
import "./Men_Products.css";

//=============Este es mi componente Men'sProducts===============//
const Men_Products = () => {
  // Aqui defino el hook useNavigate, que me permite redirigir a otras rutas
  const navigate = useNavigate();

  return (
    // Contenedor principal con clase para aplicar estilos desde Men_Products.css
    <div className="containerUno">
      <h2>Men's Products</h2>

      <img className="imagen" src={productosHombre} alt="Men's Products" />

      {/* Este es el boton que al hacer clic navega a la ruta definida en el navigate*/}
      <button className="boton" onClick={() => navigate("/productosHombre")}>
        Entrar
      </button>
    </div>
  );
};
export default Men_Products;
