// import React from 'react'

import { Outlet } from "react-router-dom"

const All_Other_Products = () => {
  return (
    <div>
        <Outlet/>
        <h1>Mas productos</h1>
    </div>
  )
}

export default All_Other_Products
