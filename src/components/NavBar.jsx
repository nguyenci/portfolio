import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

import '/src/css/Home.css'

function NavBar() {

    return (
        <>
        <div style={{paddingBottom: '120px'}}>
        <Navbar>
                <Container>
                    <Nav >
                        <Nav.Link className="navlink-style" href="/portfolio/"> Home </Nav.Link>
                        <Nav.Link className="navlink-style" href="/portfolio/about"> About </Nav.Link>
                        <Nav.Link className="navlink-style" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="navlink-style" style={{ marginRight: '30px' }} href="/contact">Contact</Nav.Link>
                    </Nav>
                
                </Container>
            </Navbar>

            
            </div>
        </>
    )
}

export default NavBar