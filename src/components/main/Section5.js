import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, UncontrolledCarousel } from 'reactstrap';


export default function Section5() {
  return (
    <section id='aims'>
        <div className='tittle'>
            <h1>Aims and Slogans</h1>
        </div>
        <Container>
            <UncontrolledCarousel
                items={[
                    {
                    altText: 'Slide 1',
                    caption: 'Creating a healthy entertainment environment',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                    altText: 'Slide 2',
                    caption: 'Enhancing user satisfaction',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                    altText: 'Slide 3',
                    caption: 'Our customers are our partners',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                    ,
                    {
                    altText: 'Slide 4',
                    caption: 'If you are always trying to be normal, you will never know how amazing you can be',
                    key: 4,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                    ,
                    {
                    altText: 'Slide 5',
                    caption: 'Just the way you are',
                    key: 5,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}    
            />
        </Container>
    </section>
  )
}
