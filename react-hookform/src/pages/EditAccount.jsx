import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";


const EditAccount = () => {

let userData = {
    name: "abc",
    age: 30,
    email:"abc@xyz.com",
}

 const editSchema = yup.object({
    name: yup.string().required().min(3, "name must be atleast 3 chars"),
    age: yup.number().required().min(18).integer(),
    email: yup.string().required().email(),
})

const { 
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
} = useForm({
    resolver: yupResolver(editSchema),
    // defaultValues: {...userData}
});


let editFormHandler = (data)=>{
    console.log(data)
}

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2  '>
        <span className='text-3xl '> Edit Form</span>
        <form  onSubmit={handleSubmit(editFormHandler)}
          className='flex flex-col gap-2  shadow-lg shadow-blue-800/30 p-4 rounded'>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='name' {...register("name")} />
            {errors.name && (<span className="text-red-500 text-sm">{errors?.name?.message}</span>)}
          </div>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='age'  {...register("age")}/>
            {errors.age && (<span className="text-red-500 text-sm">{errors.age.type == 'typeError' ? "input a valid number" : errors?.age?.message}</span>)}
          </div>
          <div className="flex flex-col">
            <input className='p-3 outline-1 rounded' type="text" placeholder='email'  {...register("email")}/>
            {errors.email && (<span className="text-red-500 text-sm">{errors?.email?.message}</span>)}
          </div>

          <input className='p-3  rounded bg-blue-400' type="submit" value={"Edit"} />
          <button 
          className='p-3  rounded bg-blue-400'
          onClick={()=>{
            setValue("name", userData.name)
            setValue("age", userData.age)
            setValue("email", userData.email)
          }}
          >
            set values
          </button>
        </form>
      </div>
  )
}

export default EditAccount