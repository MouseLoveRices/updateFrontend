
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import { fetchData, setSelectedTag, loadInitialViews, incrementViewCount } from '../../redux/testSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';

export default function ListVideo() {
    const dispatch = useDispatch();
    const { list, views, selectedTag } = useSelector(state => state.list);
    const { listUser } = useSelector(state => state.listUser);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
        dispatch(loadInitialViews());
    }, [dispatch]);

    const handleCardClick = (id) => {
        dispatch(incrementViewCount({ id, viewCount: views[id]?.count || 0 }));
        navigate(`/video/${id.toString()}`);
    };

    const handleMouseEnter = (event) => {
        const video = event.currentTarget.querySelector('video');
        if (video && video.paused) {
            video.play().catch(error => {
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

    const handleChipClick = (tag) => {
        dispatch(setSelectedTag(tag));
    };

    const filteredList = selectedTag === 'all'
        ? list
        : list.filter(item => item.tag === selectedTag);

    const sortedList = [...filteredList].sort((a, b) => (views[b.id]?.count || b.view) - (views[a.id]?.count || a.view));

    return (
            <Container>
                {['all', 'music', 'movie', 'sport', 'news'].map(tag => (
                    <Chip
                        key={tag}
                        label={tag}
                        onClick={() => handleChipClick(tag)}
                        color={selectedTag === tag ? 'primary' : 'default'}
                    />
                ))}
                <Row>
                    {sortedList.map((item, index) => {
                        const user = listUser.find(user => user.user === item.user);
                        return (
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
                                            style={{ borderRadius: '5px', width: '100%', height: '200px', objectFit: 'cover' }}
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
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                                            {views[item.id]?.count || item.view} k
                                        </CardSubtitle>
                                        {user && (
                                            <>
                                                <img
                                                    src={user.avatar}
                                                    alt={user.user}
                                                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                                                />
                                                <span>{user.user}</span>
                                            </>
                                        )}
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

    );
}
