import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"


import '/src/css/Home.css'

function Home() {
    return (
        <>
            <Navbar>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="about"> About </Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link style={{ marginRight: '30px' }} to="contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ padding: '4.3rem' }}></div>

            <Container className='title'>
                <h1 style={{ margin: '0px' }}> Hi! I'm Cinthya.</h1>
                <h2 style={{ margin: '0px', fontStyle: 'italic' }}> An aspiring software developer.</h2>
            </Container>
            <div style={{ padding: '1.5rem' }}></div>
            <h3 style={{ margin: '0px' }}> I'm passionate about providing solutions and crafting experiences that are</h3>
            <h3 style={{ margin: '0px' }}> engaging, accessible, and user-centric. </h3>

            <div style={{ padding: '1.5rem' }}></div>
            <p> Click the icons below to explore more about me and my work! </p>

            <div className='image-row'>
                <Nav.Link as={Link} to="about">
                    <img src='.\src\assets\girl.png' className="logo" alt="Girl icon created by Victoruler - https://www.flaticon.com/free-icons/girl" />
                </Nav.Link>
                <Nav.Link as={Link} to="projects">
                    <img src='.\src\assets\programming-language.png' className="logo" alt="Programming language icons created by Bamicon" />
                </Nav.Link>
                <Nav.Link as={Link} to="contact">
                    <img src='.\src\assets\communicate.png' className="logo" alt="Contact icons created by srip" />
                </Nav.Link>
            </div>

            {/* <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <Nav.Link as={Link} to="about">
                            <img src='.\src\assets\girl.png' className="logo" alt="Girl icon created by Victoruler - https://www.flaticon.com/free-icons/girl" />
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <Nav.Link as={Link} to="projects">
                            <img src='.\src\assets\programming-language.png' className="logo" alt="Programming language icons created by Bamicon" />
                        </Nav.Link>
                    </Col>
                    <Nav.Link as={Link} to="contact">
                        <img src='.\src\assets\communicate.png' className="logo" alt="Contact icons created by srip" />
                    </Nav.Link>
                    <Col xs={12} md={6}> </Col>
                </Row>
            </Container> */}


            <p className='react-vite'> Made with React and Vite </p>


        </>
    )
}

export default Home