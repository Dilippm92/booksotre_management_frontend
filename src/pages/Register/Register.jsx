import React from 'react'
import { useForm } from "react-hook-form"
import "./Register.css"
import bgimg from "../../assests/storeiamge.avif"
import { useNavigate } from "react-router-dom";
import { registerUser } from '../../api/auth_api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

        
const Register = () => {

  const Navigate = useNavigate()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const onSubmit = async (data) => {
      try {
        const response = await registerUser(data);
       
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
       
        setTimeout(() => {
          Navigate('/');
        }, 2000);
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
      Navigate("/")
    }
  return (
  <section>
    <div className="register">
    <ToastContainer />
        <div className="col-1">
            <h2>Sign In</h2>
          
            <span>Register & enjoy service</span>
            <form id='form'className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
               <input type="text" {...register("username", { required: true })} placeholder='username' /> 
               {errors.username && <span style={{color:"red"}}>user name required*</span>}
               <input type="password" {...register("password", { required: true })} placeholder='password' /> 
               {errors.password && <span style={{color:"red"}}>password required*</span>}
               <input type="password" {...register("confirmpwd", { required: true })} placeholder='Confirm password' /> 
               {errors.confirmpwd && <span style={{color:"red"}}>This filed required*</span>}
               <input
  type="text"
  {...register("phone", {
    required: "Mobile number is required",
    minLength: {
      value: 10,
      message: "Mobile number must be exactly 10 digits",
    },
    maxLength: {
      value: 10,
      message: "Mobile number must be exactly 10 digits",
    },
    pattern: {
      value: /^\d{10}$/,
      message: "Invalid mobile number format",
    },
  })}
  placeholder="Phone"
/>
{errors.phone && (
  <span style={{ color: "red" }}>
    {errors.phone.message}
  </span>
)}
               <button className='btn'>Sign In</button>
            </form>
            <span>Already have an account? <span className='inner_span' onClick={handleClick}>Please Login</span> </span>

        </div>
        <div className="col-2">
            <img src={bgimg} alt="" />
        </div>
    </div>
  </section>
  )
}

export default Register
