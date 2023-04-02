import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartPage from '../Pages/CartPage'

import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import Massage from '../Pages/Massage'
import NewPage from '../Pages/New'
import SingleProduct from '../Pages/SingleProduct'
import SingMassageProduct from '../Pages/SingMassageProduct'
import SingUpPage from '../Pages/SingUpPage'
import Wellness from '../Pages/Wellness'
import Payment from '../Pages/Payment'
import DashBoard from '../Pages/DashBoard'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/new" element={<NewPage />}></Route>
        
          <Route path="/massage" element={<Massage />}></Route>
          <Route path="/wellness" element={<Wellness />}></Route>
          <Route path="/new/:id" element={<SingleProduct />}></Route>
          <Route path="/massage/:id" element={<SingMassageProduct />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/singup" element={<SingUpPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
