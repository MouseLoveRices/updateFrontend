import React from 'react'
import { Button, Container, Form } from 'reactstrap'
import './contact.css'
import Header from '../header/HeaderAndSideBar'


export default function Contact() {
  return (
    <>  
        <Header/>
      <Container className='contactContainer'>
        <h3>Leave your information to support you</h3>
        <Form>
            <input className='uk-input' type='text' placeholder='Your name'/>
            <input className='uk-input' type='number' placeholder='Your phone'/>
            <input className='uk-input' type='email' placeholder='Your email'/>
            <textarea className='uk-textarea' rows="5" placeholder='Leave message here'/>
            <Button className='btn btn-success'>Submit</Button>
        </Form>
      </Container>
    </>  
  )
}
