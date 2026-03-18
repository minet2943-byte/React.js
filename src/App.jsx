import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./home"

function App() {
  return (
    <div>
    <h1 className='text-3xl font-bold underline text-center mt-10'>Hello, React!</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Link to="/home" className='text-blue-500 underline'>Go to Home</Link>
      <h1 className='text-3xl font-bold underline text-center mt-10'>Welcome to App Page</h1> 
    </div>  
  )
}

export default App
