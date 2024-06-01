import { useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

import { Link, Outlet } from "react-router-dom"

import NavBar from './components/NavBar.jsx'
import '/src/css/Home.css'
import '/src/css/App.css'
import '/src/css/Projects.css'

function Projects() {
    return (
        <>
            <NavBar />

            <div className='title'><h1>Projects.</h1></div>
            <p style={{ paddingBottom: '3rem' }}> A collection of sites and programs I've created over the years.</p>

            <Container style={{ maxWidth: '1200px' }}>
                <Row style={{}} xs={12} md={2} lg={2} xl={2} xxl={2}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="src/assets/placeholder.jpg" />
                            <Card.Body>
                                <Card.Title>Example 1</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="src/assets/placeholder.jpg" />
                            <Card.Body>
                                <Card.Title>Example 2</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="src/assets/placeholder.jpg" />
                            <Card.Body>
                                <Card.Title>Example 3</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="src/assets/placeholder.jpg" />
                            <Card.Body>
                                <Card.Title>Example 4</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </>
    )
}

export default Projects