import './MainPage.css'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card} from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { useNavigate } from 'react-router-dom';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section7 from './Section7';
import Section6 from './Section6';
import Section8 from './Section8';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function MainPage() {
    const navigate = useNavigate()
    const handleLaunchCLick=()=>{
        navigate("/")
    }
    return (       
       <> 
       <Header></Header>
       <section id='banner'>
            <Container
                style={{
                    padding: 0, // Loại bỏ padding của Container để không ảnh hưởng đến kích thước video
                    maxWidth: '100%', // Đảm bảo Container không vượt quá chiều rộng của viewport
                    overflowX: 'hidden' // Đảm bảo không có thanh cuộn ngang
                }}
              >                
                    <Card component="li" sx={{ position: 'relative', width: '100vw', height: '100vh' }}>
                        <CardCover>
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                poster="https://assets.codepen.io/6093409/river.jpg"
                                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} // Đảm bảo video chiếm toàn bộ không gian viewport
                            >
                                <source 
                                    src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                    type="video/mp4"
                                />
                            </video>
                        </CardCover>
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                                background: 'rgba(0, 0, 0, 0.3)', // Background overlay để giúp chữ dễ đọc hơn
                            }}>  
                            <Container>
                                <Row>
                                    <Col lg="8" xs="12">
                                        <h1 className='slogan'>To seek one's aspirations</h1>
                                        <h1 className='name'>Social media</h1>
                                        <h2>-MiceVideos-</h2>
                                    </Col>
                                    <Col lg="4" xs="12">
                                        <Button onClick={handleLaunchCLick} >Launch</Button>
                                    </Col>
                                </Row>
                            </Container>                  
                        </CardContent>
                    </Card>
            </Container>
        </section>
        <Section2/>       
        <Section3/>
        <Section4/>          
        <Section5/>  
        <Section6/> 
        <Section7/>
        <Section8/>
        
        <Footer/>
        </>
    );
}
