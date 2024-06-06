import { Container, Nav, Navbar } from 'react-bootstrap'

import '/src/css/NavBar.css'

export default function NavBar() {

    return (
        <>
            <div style={{ paddingBottom: '5rem'}}>
                <Navbar>
                    <Container>
                        <Nav >
                            <Navbar.Brand href="/">
                                <h1 className="C"> C </h1>
                            </Navbar.Brand>
                            <Nav.Link className="navlink-style" href="/portfolio/"> Home </Nav.Link>
                            <Nav.Link className="navlink-style" href="/portfolio/pages/about">About</Nav.Link>
                            <Nav.Link className="navlink-style" href="/portfolio/pages/projects">Projects</Nav.Link>
                            <Nav.Link className="navlink-style" style={{ marginRight: '30px' }} href="/portfolio/pages/contact">Contact</Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>


            </div>
        </>
    )
}