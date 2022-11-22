import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Mainbody from './Components/Mainbody'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Mainbody />
    </div>
  )
}

export default App
