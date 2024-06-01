/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

import NavBar from './components/NavBar.jsx'
import '/src/css/Home.css'

function Home() {
    return (
        <>
            <NavBar />

            <Container className='title'>
                <h1 className='header' > Hi! I'm Cinthya.</h1>
                <h2 className='header' style={{ fontStyle: 'italic' }}> An aspiring software developer.</h2>
            </Container>

            <div style={{ padding: '1.5rem' }}></div>
            <h3 className='header'> I'm passionate about providing solutions and crafting experiences that are</h3>
            <h3 className='header'> engaging, accessible, and user-centric. </h3>

            <div style={{ margin: '6rem' }}></div>
            <p> Click the icons below to explore more about me and my work! </p>

            <Container style={{ maxWidth: '500px' }}>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="about">
                            <img src='\portfolio\src\assets\girl.png' className="logo" alt="Girl icon created by Victoruler - https://www.flaticon.com/free-icons/girl" />
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="projects">
                            <img src='.\src\assets\programming-language.png' className="logo" alt="Programming language icons created by Bamicon" />
                        </Nav.Link>
                    </Col >

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="contact">
                            <img src='.\src\assets\communicate.png' className="logo" alt="Contact icons created by srip" />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home