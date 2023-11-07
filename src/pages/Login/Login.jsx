import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import "../Register/Register.css"
import bgimg from "../../assests/storeiamge.avif"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../../api/auth_api';

const Login = () => {
    const Navigate = useNavigate()

    const {register,handleSubmit,formState: { errors }} = useForm()
    const onSubmit = async (data) => {
      try {
        const response = await loginUser(data);
      
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
       
        // setTimeout(() => {
        //   Navigate('/');
        // }, 2000);
      } catch (error) {
        toast.error( error.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
       
        console.error('Error sending data to the backend:', error);
      }
    };
    const handleClick =() =>{
      Navigate("/register")
    }
  return (
  <section>
    <div className="register">
    <ToastContainer />
        
        <div className="col-1">
            <h2>Login In</h2>
          
            <span>Login & enjoy service</span>
            <form id='form'className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
               <input type="text" {...register("username", { required: true })} placeholder='username' /> 
               {errors.username && <span style={{color:"red"}}>user name required*</span>}
               <input type="password" {...register("password", { required: true })} placeholder='password' /> 
               {errors.password && <span style={{color:"red"}}>password required*</span>}
              
               <button className='btn'>Log In</button>
            </form>
            <span>Don't have an account? <span className='inner_span' onClick={handleClick}>Please Register</span> </span>

        </div>
        <div className="col-2">
            <img src={bgimg} alt="" />
        </div>
    </div>
  </section>
  )
}

export default Login
