import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import goal from '../../img/goal.webp';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Section7() {
  return (
    <section id='aboutUs'>
        <div className='tittle'>
            <h1>About us</h1>
        </div>
        <Container >
            <Row>
                <Col lg="5" sm="12" xs="12">
                    <Accordion defaultExpanded>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography>What we are?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            We're a community where videos connect people.
                            We're more than just videos. We're a movement.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        <Typography>What we do?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            We connect people through short, engaging videos.
                            We empower creators to share their stories with the world.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        <Typography>Achivement</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            A significant achievement that showcases our commitment to innovation.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Col>
                <Col lg="7" sm="12" xs="12">
                <img src={goal} alt='goal'className='goalImg'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
