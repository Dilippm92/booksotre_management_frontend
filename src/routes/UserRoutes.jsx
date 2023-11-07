import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Home from "../pages/Home/Home"
const UserRoutes = () => {
  return (
    <div>
        <Routes>
         
       
          <Route exact path="/" element={<Login />} /> 
         <Route exact path="/register" element={<Register />} />
         <Route exact path="/home" element={<Home />} />
       
       
       
       

       </Routes>
      
    </div>
  )
}

export default UserRoutes
