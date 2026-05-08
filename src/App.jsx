// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/NavbarLanding/Navbar";
import Footer from "./components/Footer/Footer";
import All_Products_Wom from "./page/All_Products_Women";
import All_Products_Men from "./page/All_Products_Men";
import All_Other_Products from "./page/All_Other_Products";
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />

          <Route path="productosHombre" element={<All_Products_Men />} />
          <Route path="ProductsWomen" element={<All_Products_Wom/>} />
          <Route path="OtherProductos" element={<All_Other_Products/>} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
