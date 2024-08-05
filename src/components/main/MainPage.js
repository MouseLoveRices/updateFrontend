import './MainPage.css'
import banner from '../../img/banner.png'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardMedia } from '@mui/material';

export default function MainPage() {
    return (       
        <section>
            <Container>
                <Row className='sectionBanner'>
                    <Col xs="12" lg="4" >
                    <h1>Mice</h1>
                    <h1>Videos</h1>
                    <Button>Launch Page</Button>
                    </Col>
                    <Col xs="12" lg="8" >
                        <Card sx={{ MaxWidth: 1200 }}>
                            <CardMedia
                                component="img"
                                alt="banner"
                                height="auto"
                                image={banner}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
