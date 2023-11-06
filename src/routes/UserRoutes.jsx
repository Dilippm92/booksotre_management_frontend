import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
const UserRoutes = () => {
  return (
    <div>
        <Routes>
         
       
          <Route exact path="/" element={<Login />} /> 
         <Route exact path="/register" element={<Register />} />
       
       
       
       

       </Routes>
      
    </div>
  )
}

export default UserRoutes
