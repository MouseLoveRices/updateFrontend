import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/HeaderAndSideBar';
import { Card, Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/testSlice';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

const Video = () => {
    const dispatch = useDispatch()
    const list = useSelector(state=>state.list.list)
    const video = list.find((video)=>video.id === id)
    const {id} = useParams()
    useEffect(()=>{
        if(!video){
            dispatch(fetchData())
        }
        },[dispatch,video])
        
        if (!video) {
            return <div>Loading....</div>; // Handle case where user is not found
          }
    return (
        <Header>
            <Container>
                <Row>
                    <Col lg="8" xs="12">
                    <h4>Video Page</h4>
                    <video controls width="100%">
                        <source src={video.url} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                    </Col>
                    <Col lg="4" xs="12">
                        {
                            list.map((item,index)=>(
                                <Card sx={{ display: 'flex' }} key={index}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/static/images/cards/live-from-space.jpg"
                                        alt="Live from space album cover"
                                        />
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            Live From Space
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Mac Miller
                                        </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}

export default Video;
