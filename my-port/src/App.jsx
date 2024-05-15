import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Cards from './components/ui/cards';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <Routes>
      <Route exact path="/" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>
      </Routes>

    </Router> 
 
  )
}

export default App
