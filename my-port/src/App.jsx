import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav';
import About from './components/about';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <About />

    {/* <div class="card">
    <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
    </div>
    <h1>HOVER ME</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?</p>
    </div> */}
    </>
  )
}

export default App
