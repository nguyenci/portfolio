import AnimatedTitle from '../components/AnimatedTitle'
import { Container, Card, Row, Col } from 'react-bootstrap'

//Images

import grad from "./../assets/grad.jpg"

export default function About() {

    return (
        <>
            <div style={{ padding: '1rem' }}></div>
            <AnimatedTitle text="About." />
            <div style={{ padding: '2rem' }}></div>
            
            
            <img src={grad} style={{ width: '20%', borderRadius: '30px' }} />
            <div style={{ padding: '1rem' }}></div>

            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title><h4>SKILLS</h4></Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><h4>EDUCATION</h4></Card.Title>
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
                                <Card.Body>
                                    <Card.Title><h4>EXPERIENCE</h4></Card.Title>
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
            </Container>
        </>
    )
}