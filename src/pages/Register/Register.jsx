import React from 'react'
import { useForm } from "react-hook-form"
import "./Register.css"
import bgimg from "../../assests/storeiamge.avif"
import { useNavigate } from "react-router-dom";


const Register = () => {
  const Navigate = useNavigate()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const onSubmit = data => console.log(data);
    const handleClick =() =>{
      Navigate("/")
    }
  return (
  <section>
    <div className="register">
        
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
