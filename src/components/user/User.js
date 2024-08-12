import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchUser } from '../../redux/userSlices';
import { Avatar, Typography } from '@mui/material';
import './User.css';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import necessary components

export default function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { listUser } = useSelector((state) => state.listUser);
  const { list } = useSelector((state) => state.list); // Access video list from Redux store
  const user = listUser.find((user) => user.id === id);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (!user) {
    return <div>Loading....</div>; // Handle case where user is not found
  }

  // Filter videos by the user's tag
  const userVideos = list.filter((video) => video.user === user.user);

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`); // Navigate to the video detail page
  };

  return (
    <>
 
        <div className='userPage'>
          <div className='userInfor'>
            <Avatar src={user.avatar} alt={user.user} style={{ width: '10%', height: '20%' }} />
            <Typography variant="h2">{user.user}</Typography>
          </div>
          <hr />
          <h2>Video</h2>
          <Container>
            <Row>
              {userVideos.map((video, index) => (
                <Col key={index} md="4" sm="6" xs="12">
                  <Card
                    style={{ cursor: 'pointer', marginBottom: '10px' }}
                    onClick={() => handleVideoClick(video.id)} // Call handleVideoClick with video ID
                  >
                    <Card.Img variant="top" src={video.img} alt={video.video} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{video.video}</Card.Title>
                      <Card.Text>
                        {video.view} k views
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
    </>
  );
}
