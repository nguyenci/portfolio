import { useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Projects.css'

// Images
import placeholder from './../assets/placeholder.jpg'

export default function Projects() {
    return (
        <>
            <div style={{ padding: '1rem' }}> </div>
            <AnimatedTitle text="Projects." />
            <div style={{ padding: '2rem' }}></div>

            <Container style={{ maxWidth: '700px' }}>
                <Card>
                    <Card.Img variant="top" src={placeholder} />
                    <Card.Header style={{paddingTop: '20px'}}><h4>Featured</h4></Card.Header>

                    <Card.Body>
                        <Card.Title><h4>Project Name</h4></Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

            <Container style={{ maxWidth: '1280px' }}>
                <Row xs={2} md={2} lg={2} xl={2} xxl={2}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title><h4>Project Name</h4></Card.Title>
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
                                <Card.Title><h4>Project Name</h4></Card.Title>
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
                                <Card.Title><h4>Coming soon!</h4></Card.Title>
                                <Card.Text>
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title><h4>Coming soon!</h4></Card.Title>
                                <Card.Text>
                                  
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