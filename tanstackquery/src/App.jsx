import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import {
  useQuery,
  keepPreviousData 
} from '@tanstack/react-query'

function App() {
  let [search, setSearch] = useState(null)

let fetchRecipes = async()=>{
  try {
    let data = await axios.get(search?`https://dummyjson.com/recipes/search?q=${search}`:'https://dummyjson.com/recipes');
    return data
  } catch (error) {
    console.error(error)
  }
}

let {data, isLoading, isPending, isError} = useQuery({
  queryKey: ['recipesData', search],
  queryFn:()=> fetchRecipes(),
  placeholderData: keepPreviousData
})

console.log(data?.data)
console.log(isLoading, isPending, isError)

console.log(search)


  return (
   <>
    <div className="main">
          <div className="searchbox p-3">
            <input
            
            onChange={(e)=> setSearch(e.target.value)}
            className='w-[400px] p-2' type="text" placeholder='seacrh a recipe' />
          </div>
      {isLoading?
      
    <span> loading ......</span>
    :
    <div className="container">

    <div className='flex flex-wrap justify-evenly w-full'>
            
    {data?.data?.recipes.map((res)=>{
        return (  
          <>
            <div key={res?.id} className='border-2 p-2 w-[400px]'>
              <img src={res?.image} alt="" className='w-full' />
            <span className='text-3xl'>{res?.name}</span>
          </div>
          </>
        )
      })}
    </div>
      </div>
    }
    </div>
   </>
  )
}

export default App
