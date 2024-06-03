import React from 'react'
import {  Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'
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