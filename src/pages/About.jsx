import AnimatedTitle from '../components/AnimatedTitle'
import { Container } from 'react-bootstrap'

//Images

import grad from "./../assets/grad.jpg"

export default function About() {

    return (
        <>
            <div style={{ padding: '1rem' }}></div>
            <AnimatedTitle text="About." />
            <div style={{ padding: '1rem' }}></div>
            <img src={grad} style={{ width: '20%', borderRadius: '30px' }} />
            <Container>
                <h3>Skills</h3>
                <h3>Education</h3>
                <h3>Experience</h3>
                
            </Container>
        </>
    )
}