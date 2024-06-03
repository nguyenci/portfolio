import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"

// Components

// Styles
import '/src/css/Home.css'
import '/src/css/App.css'

function Contact() {
    return (
        <>

            <div style={{ padding: '1rem' }}> </div>
            <div className='title'><h1>Contact.</h1></div>
            <h3> LinkedIn | GitHub </h3>

            <Form></Form>
        </>
    )
}

export default Contact