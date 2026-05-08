// Importamos Outlet desde react-router-dom.
// Outlet sirve para renderizar los componentes hijos definidos en las rutas anidadas.
import { Outlet } from "react-router-dom";

// Este componente representa la página de productos para mujeres.
// Aquí se mostrará el contenido cuando el usuario navegue a la ruta correspondiente.
const All_Products_Women = () => {
  return (
    <div>
        {/* Outlet que sirve para renderiza las rutas hijas que se definan dentro de esta ruta */}
        <Outlet/>
        <h1>Products Women...................</h1>
    </div>
  )
}

export default All_Products_Women;
