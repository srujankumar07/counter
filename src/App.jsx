import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () =>{
    setCount(count+1);
  }
  const handleDecrement = () =>{
    setCount(count-1);
  }

  return (
    <>
      <h1> counter appication</h1>
      <button onClick={handleIncrement}>increment</button>
      <span> {count}</span>
      <button onClick={handleDecrement}>decrement</button>
    </>
  )
}

export default App
