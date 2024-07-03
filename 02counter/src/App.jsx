import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=15

  const addValue = ()=> {
    console.log("value added", counter);
    
    // counter=counter+1
    setCounter(counter+1)
  }

  const removeValue = ()=> {
    console.log("value removed",counter)
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai our react</h1>

    <h2>Counter value:{counter}</h2>

    <button onClick={addValue}>Add value{counter}</button>
    <br />
    <button onClick={removeValue}>Delete value{counter}</button>
   </>
  )
}

export default App
