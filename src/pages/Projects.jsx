import { useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'
import '/src/css/Projects.css'

// Images
import placeholder from './../assets/placeholder.jpg'

function Projects() {
    return (
        <>
            <div style={{ padding: '1rem' }}> </div>
            <AnimatedTitle text="Projects." />
            <div style={{ padding: '2rem' }}></div>

            <Container style={{ maxWidth: '1280px' }}>
                <Row style={{}} xs={12} md={2} lg={2} xl={2} xxl={2}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={placeholder} />
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
                            <Card.Img variant="top" src={placeholder} />
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
                            <Card.Img variant="top" src={placeholder} />
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
                            <Card.Img variant="top" src={placeholder} />
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
            <div style={{ padding: '4rem' }}> </div>

        </>
    )
}

export default Projects