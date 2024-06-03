import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components

// Styles
import '/src/css/Home.css'

// Images
import grad from './assets/grad.JPG'

function Home() {
    return (
        <>
            <div style={{padding: '1rem'}}> </div>
            <h1> Hi! I'm Cinthya.</h1>
            <h2 style={{ fontStyle: 'italic' }}> An aspiring software developer.</h2>

            <div style={{ paddingTop: '2rem'}}>
            <h3> I'm passionate about providing solutions and crafting experiences that are engaging, accessible, and user-centric.</h3>
            </div>
            
            <p> LinkedIn | GitHub </p>

            <div style={{ padding: '0.5rem' }}></div>
            <div>
                <a href='https://docs.google.com/document/d/1woOihEDwL7uwB-VvrNdovDhoJpQYoE-AnxLe6WzNUvM/edit?usp=sharing' target="_blank" rel="noreferrer">
                    <Button variant="dark"> CV </Button>{' '}
                </a>
            </div>

            <Container style={{ paddingTop: '4rem' }}>
                <Row >
                    <Col xs={12} md={6}>
                        <img src={grad} alt="My grandparents and I after commencement." className='image' />
                    </Col>
                    <Col>
                        <h2 className='about-me-title'> About me </h2>
                        <p className='about-me'> I recently graduated from the University of Wisconsin-Madison with a B.S. in Computer Science and a minor in Integrated Liberal Studies. </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home