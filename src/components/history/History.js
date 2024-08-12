import React, { useEffect } from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadHistory, clearHistory, saveHistory } from '../../redux/historySlice';

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.history);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  const handleClearHistory = () => {
    dispatch(clearHistory());
    dispatch(saveHistory([]));
  };

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div>
      <Button onClick={handleClearHistory}>Clear History</Button>
      {history.map((item, index) => (
        <Card
          sx={{ display: 'flex', borderRadius: '10px', cursor: 'pointer', marginBottom: '10px' }}
          key={index}
          onClick={() => handleVideoClick(item.id)}
          style={{overflow:"hidden"}}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia component="img" sx={{ width: 151 }} image={item.img} alt={item.video} />
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
    </div>
  );
};

export default History;
