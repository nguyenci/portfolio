import { Container, Nav, Navbar } from 'react-bootstrap'

import '/src/css/App.css'

function NavBar() {

    return (
        <>
        <div style={{paddingBottom: '120px'}}>
        <Navbar>
                <Container>
                  
                    <Nav >
                        <Navbar.Brand href="/"> {'<C />'} </Navbar.Brand>
                        <Nav.Link className="navlink-style" href="/portfolio/"> Home </Nav.Link>
                        <Nav.Link className="navlink-style" href="/portfolio/routes/projects">Projects</Nav.Link>
                        <Nav.Link className="navlink-style" style={{ marginRight: '30px' }} href="/portfolio/routes/contact">Contact</Nav.Link>
                    </Nav>
                
                </Container>
            </Navbar>

            
            </div>
        </>
    )
}

export default NavBar