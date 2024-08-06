import React from 'react'
import './footer.css'
import { Col, Container, Input, Row } from 'reactstrap'
import logo from '../../img/logo.png'
import { Link } from '@mui/material'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
            <Row>
                <Col lg="3" md="4" sm="6" xs="12">
                    <h3>Launch our site</h3>
                    <img src={logo} alt="logo" />
                </Col>
                <Col lg="3" md="4" sm="6" xs="12">
                    <h3>Contact us</h3>
                    <p>Please leave your email to receive the latest updates.</p>
                    <Input type='email' placeholder='Type your email'/><span><i class="fa-regular fa-paper-plane"></i></span>
                    <p>If you need to get advice:</p>
                    <Link/>
                </Col>
                <Col lg="3" md="4" sm="6" xs="12">
                    <h3>Need help ?</h3>
                    <p><i class="fa-solid fa-phone"></i> +84 123 456</p>
                    <p><i class="fa-solid fa-envelope"></i> letrunghieu.ekko@gmail.com</p>
                    <p><i class="fa-solid fa-location-dot"></i> Ho Chi Minh, Viet Nam</p>
                </Col>
                <Col lg="3" md="4" sm="6" xs="12">
                    <h3>Report</h3>
                    <p>Tell me if you finding something wrong, click this link:</p>
                    <Link className='linkReport'>Report for me</Link>   
                </Col>
            </Row>
      </Container>
      <hr/>
      <p className='copyright'><i class="fa-regular fa-copyright"></i> 2024 |Le Trung Hieu| All rights reserved</p>
    </div>
  )
}
