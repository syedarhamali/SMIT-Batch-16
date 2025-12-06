import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router"
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import EditAccount from './pages/EditAccount'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h2>main page</h2>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editAccount' element={<EditAccount />} />
        <Route path='*' element={<h2>404 not found</h2>} />
      </Routes>
    </>
  )
}

export default App
