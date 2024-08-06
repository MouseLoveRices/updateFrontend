import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import colabor1 from '../../img/colabor1.jpg';
import colabor2 from '../../img/colabor2.jpg';


export default function Section3() {
  return (
    <section id='colabor'>
                <div className='tittle'>
                    <h1>Colaboration</h1>
                </div>
                <Container>
                    <Row>
                        <Col lg="6" xs="12">
                            <img src={colabor1} alt="colabor1" style={{ width: '100%', height: '80%' }}/>
                        </Col>
                        <Col lg="6" xs="12">
                            <div>
                                <h1>sdfgkj</h1>
                                <p>skdjfgsdjfmsofmsifshdfsdf
                                    sdfhkjsdfsdfjksdlfhsjdfhdjsklf
                                    sdfjhskfshfhsjkfhjsdkf
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" xs="12">
                            <div>
                                <h1>sdfgkj</h1>
                                <p>skdjfgsdjfmsofmsifshdfsdf
                                    sdfhkjsdfsdfjksdlfhsjdfhdjsklf
                                    sdfjhskfshfhsjkfhjsdkf
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <img src={colabor2} alt="colabor2" style={{ width: '100%', height: '80%' }}/>
                        </Col>                       
                    </Row>
                </Container>
        </section>
  )
}
