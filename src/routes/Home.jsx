import { Container, Row, Col, Button, Card, CardBody } from 'react-bootstrap'
import { PiStarFourFill } from "react-icons/pi"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'

// Images

function Home() {
    return (
        <>
            {/* <PiStarFourFill className='icon-top' /> */}
            <div style={{ padding: '1rem' }}> </div>
            <Container className='header-container' >
                <Row>
                    <Col>
                        <PiStarFourFill className='icon-left' />
                    </Col>
                    <Col style={{ maxWidth: '500px' }}>
                        <AnimatedTitle text="Hi! I'm Cinthya." />
                    </Col>
                    <Col>
                        <PiStarFourFill className='icon-right' />
                    </Col>
                </Row>
            </Container>

            <h2 style={{ fontStyle: 'italic' }}> An aspiring software developer.</h2>

            <div style={{ padding: '0.5rem' }}></div>
            <div>
                <a href='https://docs.google.com/document/d/1woOihEDwL7uwB-VvrNdovDhoJpQYoE-AnxLe6WzNUvM/edit?usp=sharing' target="_blank" rel="noreferrer">
                    <Button variant="dark"> CV </Button>{' '}
                </a>
            </div>

            <Container style={{ paddingTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <Row >
                    <Col>
                        <Card>
                            <CardBody>
                                <p>Make beautiful websites regardless of your design experience.</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home

