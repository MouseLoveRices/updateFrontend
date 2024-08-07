import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import policy from '../../img/policy.jpeg'

export default function Section6() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='policy'>
        <div className='tittle'>
            <h1>Policies and benefits</h1>
            <p>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
                <i class="fa-solid fa-code-commit"></i>
            </p> 
        </div> 
        <Container >
            <Row uk-scrollspy="cls:uk-animation-fade">
                <Col lg="6" xs="12" sm="12" class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true; delay: 700">
                    <img src={policy} alt='policy'/>
                </Col>
                <Col lg="6" xs="12" sm="12" class="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay: 700">
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        >
                        <Tab value="one" label="Our policies" />
                        <Tab value="two" label="Your benefits" />
                        </Tabs>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        {value === 'one' && (
                        <Typography>
                            <h2>User Conduct</h2>
                            <p>Avoid hate speech, harassment, and discrimination.</p>
                            <p>Do not post any illegal, harmful, or threatening conten.t</p>
                            <p>Respect copyright and intellectual property rights.</p>
                            <h2>Content</h2>
                            <p>No nudity, violence, or sexually suggestive content.</p>
                            <p>No spam or promotional content.</p>
                        </Typography>
                        )}
                        {value === 'two' && (
                        <Typography>
                            <h2>Connection and Community</h2>
                            <p>Connect with friends and family worldwide.</p>
                            <p>Join online communities based on shared interests.</p>
                            <p>Build relationships with like-minded individuals.</p>
                            <h2>Self-expression and Creativity</h2>
                            <p>Share your thoughts, experiences, and talents with the world.</p>
                            <p>Develop creative skills through video editing and production.</p>
                        </Typography>
                        )}      
                    </Box>
                </Col>
            </Row>
            
        </Container>
            
        
    </section>
  )
}
