import React from 'react'
import Nav1 from './units/Nav1.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Additem from './pages/Additem.jsx'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Nav1 />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/additem" element={<Additem />} />
      </Routes>
    </div>
  )
}
