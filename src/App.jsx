import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx';
import Contact from './Contact.jsx'

import '/src/css/App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App