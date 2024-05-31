import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

import NavBar from './components/NavBar.jsx'
import '/src/css/Home.css'
import '/src/css/App.css'
function Contact() {
    return (
        <>
            <NavBar />

            <div className='title'><h1>Contact</h1></div>
        </>
    )
}

export default Contact