import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Img from './components/img'

function App() {
  const [count, setCount] = useState(0)

  let obj={
    name:"Sayali",
    age:23
  }
  let arr=[1,2,3,4]
  return (
    <>
    <h1>Hello World</h1>
    <Img myArr={obj}/>
    </>
  )
}

export default App
