import React from 'react'
import { useState,useEffect } from 'react'
function App() {

// const state = useState(0);
// const count =state[0];
// const setCount = state[1];

const [count , setCount] = useState(0);

  return (
    <div>
          <h1 style={{color:"blue"}}>Count : {count}</h1>
          <button style={{padding:"10px"}} onClick={() => setCount (count + 1)}>increment</button>
          <button style={{padding:"10px"}} onClick={() => setCount(count-1)}>Dicrebment</button>
          
          
    </div>
  )
}

export default App