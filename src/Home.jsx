import { Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import NavBar from './components/NavBar.jsx'

// Styles
import '/src/css/Home.css'

// Images
import girl from './assets/girl.png'
import programming_language from './assets/programming-language.png'
import communicate from './assets/communicate.png'

function Home() {
    return (
        <>
            <NavBar />
            <Container className='title'>
                <h1 className='header' > Hi! I'm Cinthya.</h1>
                <h2 className='header' style={{ fontStyle: 'italic' }}> An aspiring software developer.</h2>
            </Container>

            <div style={{ padding: '1.5rem' }}></div>
            <h3 className='header'> I'm passionate about providing solutions and crafting experiences that are</h3>
            <h3 className='header'> engaging, accessible, and user-centric. </h3>

            <div style={{ margin: '6rem' }}></div>
            <p> Click the icons below to explore more about me and my work! </p>

            <Container style={{ maxWidth: '500px' }}>
                <Row>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="/portfolio/about">
                            <img src={girl} className="logo" alt="Girl icon created by Victoruler" />
                        </Nav.Link>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="/portfolio/projects">
                            <img src={programming_language} className="logo" alt="Programming language icons created by Bamicon" />
                        </Nav.Link>
                    </Col >

                    <Col xs={12} md={6} lg={4} xl={4} xxl={4}>
                        <Nav.Link as={Link} to="/portfolio/contact">
                            <img src={communicate} className="logo" alt="Contact icons created by srip" />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home