import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h2>form for context</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
