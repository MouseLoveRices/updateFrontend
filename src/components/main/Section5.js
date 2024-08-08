import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import mark from '../../img/mark-twain.png'
import gandhi from '../../img/gandhi.jpg'
import forest from '../../img/forest.jpg'
import ocean from '../../img/ocean.jpg'
import sky from '../../img/sky.jpg'


export default function Section5() {
    
  return (
    <section id='aims'>
        <div className='tittle'>
            <h1>Aims and Slogans</h1>
            <p>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
            </p>         
        </div>
        <Container>
            <Carousel fade>
                <Carousel.Item interval={2000}>
                        <img src={mark} alt="Mark Twain" style={{width:'100%', height:"100%"}}/>
                    <Carousel.Caption>
                        <h3 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 80vh + 50%; repeat: true">Mark Twain</h3>
                        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 80vh + 50%; repeat: true">"Continuous improvement is better than delayed perfection."</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img  src={gandhi} style={{width:'100%', height:"100%"}} alt='Gandhi'/>
                <Carousel.Caption>
                    <h3 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 80vh + 50%; repeat: true">Mahatma Gandhi</h3>
                    <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 80vh + 50%; repeat: true">"The best way to find yourself is lose yourself in the service of orthers."</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img  src={forest} style={{width:'100%', height:"100%"}} alt='forest'/>
                <Carousel.Caption>
                    <h3 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 80vh + 50%; repeat: true">Laura Ashley</h3>
                    <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 80vh + 50%; repeat: true">
                        "We don't want to push our ideas on to customers, we simply want to make what they want."
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img  src={sky} style={{width:'100%', height:"100%"}} alt='sky'/>
                <Carousel.Caption>
                    <h3 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 80vh + 50%; repeat: true">Indra Nooyi</h3>
                    <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 80vh + 50%; repeat: true">
                        "When you assume negative intent, you're angry. If you take away that anger and assume positive intent, you will be amazed."
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={ocean} style={{width:'100%', height:"100%"}} alt='ocean'/>
                <Carousel.Caption>
                    <h3 uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 80vh + 50%;  repeat: true">Tony Hsieh</h3>
                    <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 80vh + 50%; repeat: true">
                        "Customer service shouldn't just be a department, it should be the entire company."
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </section>
  )
}
