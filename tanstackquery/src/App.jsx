import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, Link } from "react-router"
import Recipes from './pages/Recipes.jsx'
import Recipe from './pages/Recipe.jsx'
import Todos from './pages/Todos.jsx'

function App() {


  return (
   <>


    <Routes>
      <Route path='/' element={
      <>
      <ul>
        <Link to='/recipes'><li>recipes</li></Link>
        <Link to='/todos'><li>todos</li></Link>
      </ul>
      </>
      
    }/>


    <Route path='/todos' element={<Todos/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='recipe/:id' element={<Recipe/>}/>
    </Routes>


   </>
  )
}

export default App
