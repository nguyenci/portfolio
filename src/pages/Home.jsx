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
            <div className='centered'>
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

                <h3 style={{ paddingTop: '1rem' }}> An aspiring software developer.</h3>

                <div style={{ padding: '1rem' }}></div>
                <div>
                    <a href='https://docs.google.com/document/d/1woOihEDwL7uwB-VvrNdovDhoJpQYoE-AnxLe6WzNUvM/edit?usp=sharing' target="_blank" rel="noreferrer">
                        <Button variant="dark"> <h4>Resumé</h4> </Button>{' '}
                    </a>
                </div>
            </div>

            <Container className='footer-h6'>
                <footer>
                Made with ❤️ by Cinthya Nguyen
                </footer>
            </Container>
        </>
    )
}

export default Home

