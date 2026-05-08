// import React from 'react'
// import Men_Products from "../../components/CardMen'sClothing/Men_Products"
import Men_Products from "../../components/CardMen'sClothing/Men_Products";
import Women_Clothing from "../../components/CardWomen's.Clothing/Women_clothing";
import Other_Products from "../../components/Other_Products/Other_Products";
import './Home.css'

//Este es el home dodne estan las clases containers_Padres centrales con las que el ususario puede interactuar 
const Home = () => {
  return (
    <div className="cotainer">
      <Men_Products/>
      <Women_Clothing/>   
      <Other_Products/>
    </div>
  )
}

export default Home
