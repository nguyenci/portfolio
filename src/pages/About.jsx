import AnimatedTitle from '../components/AnimatedTitle'
import { Container } from 'react-bootstrap'

//Images

import grad from "./../assets/grad.jpg"
import placeholder from "./../assets/placeholder.jpg"

export default function About() {

    return (
        <>
            <div style={{ padding: '1rem' }}></div>
            <AnimatedTitle text="About." />
            <div style={{ padding: '1rem' }}></div>
            <img src={grad} style={{ width: '20%', borderRadius: '30px' }} />
            <Container>
                <h3>Skills</h3>
                <p> Python, Java, JavaScript, React, Docker, Kafka, Cassandra, Kubernetes, Spark, HDFS </p>
                <p> Currently learning: Angular </p>
                <h3>Education</h3>
                <p>Started my Computer Science degree in 2021 at University of Wisconsin-Madison and graduated in 2024.</p>
                <h3>Experience</h3>
                <p>I was a Cloud Engineering Intern at Alliant Energy in their IT department from May 2023 to January 2024.
                    Worked primarily on monitoring nodes in Kubernetes (OpenShift) and utilized Grafana and Prometheus as the
                    dashboard and data source, respectively. Used Docker to deploy and manage our Grafana instances in GitLab.
                    Also assisted my team in unit testing for AE's EWAM project. </p>
                <p> Prior to that, I worked as a Coding Instructor at a non-profit organization called Maydm. I taught a classroom
                    of 17 girls various concepts related to coding, as part of the program's initiative to bridge the gender
                    gap in computer science.
                </p>
            </Container>
        </>
    )
}