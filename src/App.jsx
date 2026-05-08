import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/NavbarLanding/Navbar";
import Footer from "./components/Footer/Footer";
import All_Products_Wom from "./page/All_Products_Women";
import All_Products_Men from "./page/All_Products_Men";
import All_Other_Products from "./page/All_Other_Products";

//====Aqui ya estan pre definidas e importadas todaslas rutas 
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

      {/* Estas son mis rutas anidadas que tienen como padre home donde se almacen las cases containers   */}
      <Routes>
        <Route path="/" element={<Home />} />

          {/* Estas son las rutas hijas poprlas que vamos a navegar */}
          <Route path="productosHombre" element={<All_Products_Men />} />
          <Route path="ProductsWomen" element={<All_Products_Wom/>} />
          <Route path="OtherProductos" element={<All_Other_Products/>} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
