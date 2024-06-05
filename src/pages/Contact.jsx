import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'
import '/src/css/Contact.css'

function Contact() {
    return (
        <>

            <div style={{ padding: '1rem' }}> </div>
            <AnimatedTitle text="Contact." />
            <h3 style={{ paddingTop: '1rem', paddingBottom: '4rem' }}> LinkedIn | GitHub </h3>

            <Container className='form.container' sm={{span: 100}}>
                <Form className='form' >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2} style={{textAlign: 'right'}}> Full Name </Form.Label>
                        <Form.Control type="name" placeholder="Jane Doe" />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2} style={{textAlign: 'right'}}> Email </Form.Label>
                        <Form.Control  type="email" placeholder="janedoe@email.com" />

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMsg">
                        <Form.Label column sm={2} style={{textAlign: 'right'}}> Message </Form.Label>
                        <Form.Control type="msg" placeholder="Let me know why you want to contact me!" />
                    </Form.Group>

                    <Form.Group as={Row} className="submit-button">
                        <Col> <Button type="submit"> Submit </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Contact