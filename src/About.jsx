import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

// import '/src/css/Home.css'
import '/src/css/About.css'

function About() {
    return (
        <>

            <Navbar>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="."> About </Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link style={{ marginRight: '30px' }} as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div style={{ padding: '2rem' }}></div>

            <div className='title'>
                <h1>I'm Cinthya.</h1>
            </div>

            <div className='resume'>
                {/* Change how this looks */}
                <a href="https://example.com"> RESUME </a> 
            </div>

                <Container>
                    <Row >
                        <Col xs={12} md={6}>
                            {/* <img src='src/assets/grad.JPG' alt="My grandparents and I after commencement." className='image' /> */}
                            <div style={{width: '300px', height: '300px', backgroundColor: "red"}}></div>
                        </Col>
                        <Col>
                            <p className='about-me'> poop </p>
                        </Col>
                    </Row>
                </Container>

        </>
    )
}

export default About