// Aqui mport0 el hook useNavigate de react-router-dom para manejar la navegación
import { useNavigate } from "react-router-dom";
import Other_product from "../../assets/images.jpg";
import "./Other_Products.css";

//=============Este es mi componente Other'sProducts===============//
const Other_Products = () => {
  const navigate = useNavigate();

  return (

    // Contenedor principal con clase para aplicar estilos
    <div className="containerUno">
      <h2>Other's Products</h2>
      <img className="imagen" src={Other_product} alt="Other's Products" />

      {/* Este es el boton que al hacer clic navega a la ruta definida en el navigate*/}
      <button className="boton" onClick={() => navigate("/OtherProductos")}>
        Entrar
      </button>
    </div>
  );
};

export default Other_Products;
