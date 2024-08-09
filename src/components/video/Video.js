import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, Col, Collapse, Container, Input, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/testSlice';
import { Avatar, Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import './video.css'
import defaultUser from '../../img/defaultUser.jpg'
import { fetchUser } from '../../redux/userSlices';
import Body from '../body/Body';

const Video = () => {
    const [isOpen,setIsOpen] = useState(true)
    const { id } = useParams();
    const dispatch = useDispatch();

    const list = useSelector(state => state.list.list);
    const users = useSelector(state => state.listUser.listUser);

    const video = list.find(video => video.id === id);

    useEffect(() => {
        if (!video) {
            dispatch(fetchData());
        }
        if (users.length === 0) {
            dispatch(fetchUser());
        }
    }, [dispatch, video, users.length]);

    if (!video) {
        return <div>Loading....</div>;
    }

    const user = users.find(user => user.user === video.user); // Find the user associated with the video

    const toggle=()=>{setIsOpen(!isOpen)}



    return (
        <Body>
            <Container className='videoOfUser'>
                <Row>
                    <Col lg="8" xs="12">
                        <video controls width="100%" style={{ objectFit: "cover", height: "40%", borderRadius:"10px" }}>
                            <source src={video.url} type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                        </video>
                        <Container className='nameAndView'>
                            <h5>{video.video}</h5>
                            <p>View: {video.view} k</p>
                        </Container>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            {user && (
                                <>
                                    <img
                                        src={user.avatar}
                                        alt={user.user}
                                        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                                    />
                                    <Typography variant="h6">{user.user}</Typography>
                                </>
                            )}
                            <Button style={{ marginLeft: 'auto', border: "1px solid" }}>Watch later</Button>
                        </div>
                        <Container>
                            <hr/>
                            <div className='you'>
                                <Avatar src={defaultUser} alt='you'/>
                                <Input type='text' placeholder='Comment'/>      
                            </div>                           
                            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
                                Comment
                            </Button>
                            <Collapse isOpen={isOpen} >
                                <Card>
                                <CardBody>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </CardBody>
                                </Card>
                            </Collapse>
                        </Container>
                    </Col>
                    <Col lg="4" xs="12">
                        <h4>Recommend</h4>
                        {list.map((item, index) => (
                            <Card sx={{ display: 'flex', borderRadius:"10px" }} key={index}>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={item.img}
                                        alt={item.video}
                                    />
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.video}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {item.user}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Body>
    );
};

export default Video;