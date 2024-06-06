import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components
import AnimatedTitle from '../components/AnimatedTitle'

// Styles
import '/src/css/Contact.css'

export default function Contact() {
    return (
        <>

            <div style={{ padding: '1rem' }}> </div>
            <AnimatedTitle text="Contact." />
            <h3 style={{ paddingTop: '1rem', paddingBottom: '4rem' }}> LinkedIn | GitHub </h3>

            <h4> Get in touch </h4>
            <Container className='form.container' sm={{ span: 100 }}>
         
                <Form className='form' >
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2} style={{ textAlign: 'right' }}> <h6>Full Name</h6> </Form.Label>
                        <Form.Control type="name" placeholder="Jane Doe" />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2} style={{ textAlign: 'right' }}> <h6>Email</h6> </Form.Label>
                        <Form.Control type="email" placeholder="janedoe@email.com" />

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMsg">
                        <Form.Label column sm={2} style={{ textAlign: 'right' }}> <h6>Message</h6> </Form.Label>
                        <Form.Control type="msg" placeholder="I'd like to contact you about..." />
                    </Form.Group>

                    <Form.Group as={Row} className="submit-button">
                        <Col> <Button variant="light" type="submit"> <h6>Submit</h6> </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}