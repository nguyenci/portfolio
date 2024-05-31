import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

function Contact() {
    return (
        <>
        <div>
                <Navbar>
                    <Container>
                        <Nav>
                            <Nav.Link as={Link} to="/"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/about"> About </Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link style={{ marginRight: '30px' }} as={Link} to=".">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div style={{ padding: '2rem' }}></div>
            <div className='title'><h1>Contact</h1></div>
        </>
    )
}

export default Contact