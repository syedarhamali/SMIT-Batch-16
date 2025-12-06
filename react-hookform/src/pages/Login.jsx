import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Login = () => {
  const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  });

  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

let loginSubmitHandler = (data)=>{
  console.log(data)
}

console.log("errors: =>" , errors)

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2  '>
      <span>Login Form</span>
        <form className='flex flex-col gap-2  shadow-lg shadow-blue-800/30 p-4 rounded'
        onSubmit={handleSubmit(loginSubmitHandler)}
        >
            <div className='flex flex-col justify-center align-center '>
              <input className='p-3 outline-0 shadow-lg shadow-blue-800/30 rounded'
               type="text"  placeholder='enter your email'
               {...register("email")}
               />
               {errors.email ? <span className='text-red-600 text-[0.7em] p-2'>{errors.email.message}</span> : null}
            </div>

            <div className='flex flex-col justify-center align-center '>
              <input className='p-3 outline-0 shadow-lg shadow-blue-800/30 rounded'
               type="text"  placeholder='enter your password'
               {...register("password")}
               />
               {errors.password ? <span className='text-red-600 text-[0.7em] p-2'>{errors.password.message}</span> : null}
            </div>

             <div className='flex justify-center'>
              <input className='p-3 bg-blue-500 outline-0 shadow-lg shadow-blue-800/30 rounded'
               type="submit" />
            </div>
        </form>

    </div>
  )
}

export default Login