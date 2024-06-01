/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

import '/src/css/App.css'

function App() {
  return (
    <>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      { /* Have to use absolute paths */ }
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App