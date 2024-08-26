import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import NavBar from './components/Navbar';
import About from './components/about';
import Contact from './components/contact';
import Skills from './components/skills';
import HireMe from './components/hire_me';
import Jokes from './components/joke';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/skills" element={<Skills />}/>
      <Route exact path="/hireme" element={<HireMe />}/>
      <Route exact path="/joke" element={<Jokes/>}/>

      </Routes>

    </Router> 
 
  )
}

export default App
