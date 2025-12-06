import React from 'react'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";



const Register = () => {





  const registerSchema = yup.object({
    name: yup.string().required().min(3, "name must be atleast 3 chars"),
    age: yup.number().required().min(18).integer(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "password must have be 8 length, 1 letter and 1 number required."),
    skills: yup.array().of(yup.string()).min(2).max(3),
  });


 

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "user123",
      email: "abc@example.com",
    }
  });

 let formSubmitHandler = (data) => {
    console.log("form data", data)

    reset({
      name:"",
      age:"",
      password:"",
      email:"",
      skills: []
    });
  }
  console.log(errors)

  console.log(watch("email"))
  console.log(watch("name"))

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center gap-2  '>
        <span className='text-3xl '> Register Form</span>
        <form onSubmit={handleSubmit(formSubmitHandler)}
          className='flex flex-col gap-2  shadow-lg shadow-blue-800/30 p-4 rounded'>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='name' {...register("name", { required: true })} />
            {errors.name && (<span className="text-red-500 text-sm">{errors?.name?.message}</span>)}
          </div>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='age' {...register("age")} />
            {errors.age && (<span className="text-red-500 text-sm">{errors.age.type == 'typeError' ? "input a valid number" : errors?.age?.message}</span>)}
          </div>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='email' {...register("email")} />
            {errors.email && (<span className="text-red-500 text-sm">{errors?.email?.message}</span>)}

          </div>
          <div className="flex flex-col">

            <input className='p-3 outline-1 rounded' type="text" placeholder='password' {...register("password")} />
            {errors.password && (<span className="text-red-500 text-sm">{errors?.password?.message}</span>)}
          </div>


          <div className="flex flex-col">
            <div>
              your skills: <br />

              <input type="checkbox" id='html' value={'html'} {...register('skills')}/>
              <label htmlFor="html">html</label>
              <br />
              <input type="checkbox" id='css' value={'css'} {...register('skills')}/>
              <label htmlFor="css">css</label>
              <br />
              <input type="checkbox" id='javascript' value={'javascript'} {...register('skills')}/>
              <label htmlFor="javascript">javascript</label>
            </div>
            {errors.skills && (<span className="text-red-500 text-sm">{errors?.skills?.message}</span>)}

          </div>
          <input className='p-3  rounded bg-blue-400' type="submit" />
        </form>
      </div>
    </>
  )
}

export default Register