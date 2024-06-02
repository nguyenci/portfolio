import { Container, Nav, Navbar } from 'react-bootstrap'

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
                        <Nav.Link className="navlink-style" href="/portfolio/projects">Projects</Nav.Link>
                        <Nav.Link className="navlink-style" style={{ marginRight: '30px' }} href="/portfolio/contact">Contact</Nav.Link>
                    </Nav>
                
                </Container>
            </Navbar>

            
            </div>
        </>
    )
}

export default NavBar