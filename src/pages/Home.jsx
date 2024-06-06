import { useState } from 'react'
import { Container, Row, Col, Button, Toast, ToastContainer } from 'react-bootstrap'
import { PiStarFourFill } from "react-icons/pi"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'

// Images
import info from "./../assets/info.jpg"
function Home() {

    const [showToast, setShowToast] = useState(true)
    const toggleShowToast = () => setShowToast(!showToast)

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
                        <Button variant="light"> <h4>Resumé</h4> </Button>{' '}
                    </a>
                </div>
            </div>

            <ToastContainer position='bottom-end' className="toastContainer">
                {/* TODO: make sure state persists after navigating to a diff page */}
                <Toast show={showToast} onClose={toggleShowToast} style={{ boxShadow: 'none' }}> 
                    <Toast.Header>
                        <img style={{ width: '20px', height: '20px' }} src={info} className="rounded me-2" alt="Information icon" />
                        <strong className="me-auto" style={{fontFamily: 'Unbounded'}}>Announcement</strong>
                    </Toast.Header>
                    <Toast.Body style={{ textAlign: 'left', fontFamily: 'Unbounded' }}>
                        Mobile version coming soon!
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <Container className='footer-h6'>
                <footer>
                    Made with ❤️ by Cinthya Nguyen
                </footer>
            </Container>
        </>
    )
}

export default Home

