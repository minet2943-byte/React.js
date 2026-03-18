import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1 className='text-3xl font-bold underline text-center mt-10'>Welcome to Home Page</h1>    
        <Link to="App">Gop to App</Link>
    </div>
  )
}

export default Home
