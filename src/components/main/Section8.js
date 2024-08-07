import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import youtube from '../../img/Youtube.jpeg'
import facebook from '../../img/facebook.webp'
import tiktok from '../../img/tiktok.png'
import insta from '../../img/insta.png'
import netflix from '../../img/netflix.webp'
import reddit from '../../img/reddit.png'

export default function Section8() {
  return (
    <section id='co-founder'>
        <div className='tittle'>
            <h1>Co-Founder</h1>
            <p>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
            </p> 
        </div>
        <Container >
            <Row uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500; repeat: true">
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={youtube} alt="youtube" />
                </Col>
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={facebook} alt="facebook" />
                </Col>
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={insta} alt="insta" />
                </Col>
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={tiktok} alt="tiktok" />
                </Col>
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={netflix} alt="netflix"/>
                </Col>
                <Col lg="2" md="4" xs="6" sm="6">
                    <img src={reddit} alt="reddit" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
