import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from "react-router-dom"

import '/src/css/Home.css'

function NavBar() {

    return (
        <>
        <Navbar>
                <Container>
                    <Nav>
                        <Nav.Link className="navlink-style" href="/"> Home </Nav.Link>
                        <Nav.Link className="navlink-style" href="/about"> About </Nav.Link>
                        <Nav.Link className="navlink-style" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="navlink-style" style={{ marginRight: '30px' }} href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ padding: '4.3rem' }}></div>

        </>
    )
}

export default NavBar