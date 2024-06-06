import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Toast, ToastContainer } from 'react-bootstrap'
import { PiStarFourFill } from "react-icons/pi"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Home.css'

// Images
import info from "./../assets/info.jpg"
export default function Home() {

    const [showToast, setShowToast] = useState(false)
    const toggleShowToast = () => setShowToast(!showToast)

    useEffect(() => {
        toggleShowToast()
    }, [])

    return (
        <>
            <div className='title-button-container'>

                <Container className='header-container' xs={6} md={4} lg={4} xl={4}>
                    <Row>
                        <Col xs={1} md={2} lg={2} xl={2}>
                            <PiStarFourFill className='icon-left' />
                        </Col>
                        <Col xs={10} md={8} lg={8} xl={8} style={{ maxWidth: '600px'}}>
                            <AnimatedTitle text="Hi! I'm Cinthya." />
                        </Col>
                        <Col xs={1} md={2} lg={2} xl={2}>
                            <PiStarFourFill className='icon-right' />
                        </Col>
                    </Row>
                </Container>

                <h3 style={{ paddingBlock: '1rem'}}> An aspiring software developer.</h3>

                <a href='https://docs.google.com/document/d/1woOihEDwL7uwB-VvrNdovDhoJpQYoE-AnxLe6WzNUvM/edit?usp=sharing' target="_blank" rel="noreferrer">
                    <Button variant="light"> <h4>Resumé</h4> </Button>{' '}
                </a>

            </div>

            <ToastContainer position='bottom-end' className="toastContainer">
                {/* TODO: make sure state persists after navigating to a diff page */}
                <Toast show={showToast} onClose={toggleShowToast} style={{ boxShadow: 'none' }}>
                    <Toast.Header>
                        <img style={{ width: '20px', height: '20px' }} src={info} className="rounded me-2" alt="Information icon" />
                        <strong className="me-auto" style={{ fontFamily: 'Unbounded' }}>Announcement</strong>
                    </Toast.Header>
                    <Toast.Body style={{ textAlign: 'left', fontFamily: 'Unbounded' }}>
                        Mobile version coming soon!
                    </Toast.Body>
                </Toast>
            </ToastContainer>

        </>
    )
}