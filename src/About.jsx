import { Container, Row, Col, Button } from 'react-bootstrap'

// Components
import NavBar from './components/NavBar.jsx'

// Styles
import '/src/css/Home.css'
import '/src/css/About.css'

// Images
import grad from './assets/grad.JPG'

function About() {
    return (
        <>
            <NavBar />

            <div className='title'>
                <h1>I'm Cinthya.</h1>
            </div>

            <div>
                <a href='https://docs.google.com/document/d/1woOihEDwL7uwB-VvrNdovDhoJpQYoE-AnxLe6WzNUvM/edit?usp=sharing' target="_blank" rel="noreferrer">
                    <Button variant="dark"> Resume </Button>{' '}
                </a>
            </div>

            <div style={{ margin: '4.3rem' }}></div>

            <Container style={{ maxWidth: '1300px' }}>
                <Row >
                    <Col xs={12} md={6}>
                        <img src={grad} alt="My grandparents and I after commencement." className='image' />
                    </Col>
                    <Col>
                        <h2 className='about-me-title'> Poop </h2>
                        <p className='about-me'> More poop </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About