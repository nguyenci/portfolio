import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import NavBar from './components/NavBar.jsx'

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'

function Contact() {
    return (
        <>
            <NavBar />

            <div className='title'><h1>Contact.</h1></div>
            <p> Work in progress. </p>
        </>
    )
}

export default Contact