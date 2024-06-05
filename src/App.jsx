import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import './css/App.css'
function App() {


  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App