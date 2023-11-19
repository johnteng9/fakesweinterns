import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
import Enrollment from './enrollment.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Enrollment/>

    </>
  )
}

export default App
