import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { fetchData } from '../../redux/testSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/HeaderAndSideBar';

export default function Test() {
    const dispatch = useDispatch();
    const { list } = useSelector(state => state.list);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleCardClick = (id) => {
        navigate(`/video/${id.toString()}`);
    };

    const handleMouseEnter = (event) => {
        const video = event.currentTarget.querySelector('video');
        if (video && video.paused) {
            video.play().catch(error => {
                // Handle play errors here if necessary
                console.error('Error trying to play video:', error);
            });
        }
    };

    const handleMouseLeave = (event) => {
        const video = event.currentTarget.querySelector('video');
        if (video && !video.paused) {
            video.pause();
            video.currentTime = 0; // Reset video to start
        }
    };

    return (
        <Header>
            <Container>
                <Row>
                    {list.map((item, index) => (
                        <Col key={index} md="4" xs="6">
                            <Card
                                onClick={() => handleCardClick(item.id)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{ cursor: 'pointer', marginBottom: '10px' }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={item.img}
                                        alt={item.video}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                    <video
                                        width="100%"
                                        height="200px"
                                        muted
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0, // Start invisible
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                        onMouseEnter={(e) => e.target.style.opacity = 1}
                                        onMouseLeave={(e) => e.target.style.opacity = 0}
                                    >
                                        <source src={item.url} type="video/mp4" />
                                        Trình duyệt của bạn không hỗ trợ thẻ video.
                                    </video>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">{item.video}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{item.view} k</CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Header>
    );
}
