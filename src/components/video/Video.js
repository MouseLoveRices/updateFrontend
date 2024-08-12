import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardBody, Col, Collapse, Container, Input, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/testSlice';
import { Avatar, Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import './video.css';
import defaultUser from '../../img/defaultUser.jpg';
import { fetchUser } from '../../redux/userSlices';
import {
  incrementView,
  addComment,
  addToWatchLater,
  addToHistory,
  loadInitialData,
} from '../../redux/videoSlice';



const Video = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const list = useSelector(state => state.list.list);
  const users = useSelector(state => state.listUser.listUser);
  const views = useSelector(state => state.video.views);
  const comments = useSelector(state => state.video.comments[id] || []);

  const video = list.find(video => video.id === id);

  useEffect(() => {
    if (!video) {
      dispatch(fetchData());
    }
    if (users.length === 0) {
      dispatch(fetchUser());
    }
    dispatch(loadInitialData());
    if (video) {
      dispatch(incrementView({ id, viewCount: video.view || 0 }));
      dispatch(addToHistory(video));
    }
  }, [dispatch, video, users.length, id]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!video) {
    return <div>Loading....</div>;
  }

  const user = users.find(user => user.user === video.user);

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addCommentHandler();
    }
  };

  const addCommentHandler = () => {
    if (commentText.trim()) {
      dispatch(addComment({ id, comment: commentText }));
      setCommentText('');
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const addToWatchLaterHandler = () => {
    dispatch(addToWatchLater(video));
  };

  const sameTagVideos = list.filter(item => item.id !== id && item.tag === video.tag);
  const otherVideos = list.filter(item => item.id !== id && item.tag !== video.tag);

  const sortedSameTagVideos = sameTagVideos.sort((a, b) => (views[b.id]?.count || b.view) - (views[a.id]?.count || a.view));

  const sortedOtherVideos = otherVideos.sort((a, b) => (views[b.id]?.count || b.view) - (views[a.id]?.count || a.view));

  const recommendedVideos = [...sortedSameTagVideos, ...sortedOtherVideos];

  const handleRecommendedVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <Container className='videoOfUser'>
      <Row>
        <Col lg="8" xs="12">
          <video controls width="100%" style={{ objectFit: "contain", height: "500px", borderRadius: "10px" }}>
            <source src={video.url} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
          <Container className='nameAndView'>
            <h5>{video.video}</h5>
            <p>View: {views[id]?.count || video.view} k</p>
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
            <Button
              style={{ marginLeft: 'auto', border: "1px solid" }}
              onClick={addToWatchLaterHandler}
            >
              Watch later
            </Button>
          </div>
          <Container>
            <hr />
            <div className='you'>
              <Avatar src={defaultUser} alt='you' />
              <Input
                type='text'
                placeholder='Comment'
                value={commentText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
              Comment
            </Button>
            <Collapse isOpen={isOpen}>
              {comments.map((comment, index) => (
                <Card key={index}>
                  <Avatar src={defaultUser} alt='user comment' />
                  <CardBody>
                    {comment}
                  </CardBody>
                </Card>
              ))}
            </Collapse>
          </Container>
        </Col>
        <Col lg="4" xs="12">
          <h4>Recommend</h4>
          {recommendedVideos.map((item, index) => (
            <Card
              sx={{ display: 'flex', borderRadius: "10px", }}
              key={index}
              onClick={() => handleRecommendedVideoClick(item.id)}
              style={{ cursor: 'pointer', overflow:"hidden", marginBottom:"10px" }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.img}
                  alt={item.video}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography
                    component="p"
                    variant="body2"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2, // Limit text to 2 lines
                      WebkitBoxOrient: 'vertical',
                      whiteSpace: 'normal', // Allow wrapping
                      wordBreak: 'break-word', // Break words if necessary
                    }}>
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
  );
};

export default Video;
