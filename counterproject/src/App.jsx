import { useState } from 'react'//hook(bable)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]= useState(0)

 //let counter=0
//set counter is reference holder

  const addValue=() =>{
    // counter=counter+1
    setCounter(counter+1)
    console.log("clicked",counter)
  }
  
  const removeValue=() =>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      alert('counter doesnot gives negative value')
    }
  }
  return (
    <>
      <h1>test code</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
