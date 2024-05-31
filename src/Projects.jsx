import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col, Carousel } from 'react-bootstrap'

import { Link, Outlet } from "react-router-dom"

import '/src/css/Home.css'


function Projects() {
    return (
        <>
            <div>
                <Navbar>
                    <Container>
                        <Nav>
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/about"> About </Nav.Link>
                            <Nav.Link as={Link} to=".">Projects</Nav.Link>
                            <Nav.Link style={{ marginRight: '30px' }} as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div style={{ padding: '2rem' }}></div>
            <div className='title'><h1>Projects</h1></div>

            <Carousel>
               
            </Carousel>
        </>
    )
}

export default Projects;