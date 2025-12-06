import React, { useState } from 'react'
import { addTodos, getTodos } from '../utilities/todo.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from "axios"

const Todos = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient()

  let [input, setInput] = useState(null)

  let fetchItems = async () => {
    let data = await axios.get('https://smit-backend-crud.vercel.app/api/items')
    return data?.data?.data
  }
  fetchItems();


  let addProducts = async (productData) => {
    let response = await axios.post('https://smit-backend-crud.vercel.app/api/items', {
      id: 2,
      name: productData,
      description: `Description for ${productData}`,
      createdAt: "2025-11-29T11:57:49.169Z"
    })
    console.log(response)
  }

  let { data, refetch, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems
  })

  console.log(data)

  let mutation = useMutation({
    mutationFn: (productToAdd) => addProducts(productToAdd),
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries({ queryKey: ['items'] })// new data in cache
    },
    // onSettled: ()=>{}, // run after request completion whatever error/success is...
    onMutate: ()=>{  // run before mutationFn
      console.log("onMutate call")
    }
  })

  return (
    <div>

      <div>
        <input type="text" placeholder='add new todo'

          onChange={(e) => setInput(e.target.value)}
        />
        <button

          onClick={() => mutation.mutate(input)}
        >add</button>

      </div>


      {
        isLoading ?
          <h2>loading....</h2>
          :
          <div className='flex flex-col gap-3'>
            {data?.map((item) => {
              return (
                <div className='border-2 rounded-2 border-blue-800 p-3 flex flex-col'>
                  <span>{item?.name}</span>
                  <span>{item?.description}</span>


                </div>
              )
            })}
          </div>
      }


    </div>
  )
}

export default Todos