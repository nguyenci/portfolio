import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col, Carousel } from 'react-bootstrap'

import { Link, Outlet } from "react-router-dom"

import NavBar from './components/NavBar.jsx'
import '/src/css/Home.css'
import '/src/css/App.css'

function Projects() {
    return (
        <>
            <NavBar />

            <div className='title'><h1>Projects</h1></div>

            <Carousel>
            </Carousel>
        </>
    )
}

export default Projects