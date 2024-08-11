import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const searchResults = useSelector((state) => state.list.searchResults);
  const navigate = useNavigate();
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };
  return (

      <div>
        <h2>Search Results</h2>
        {searchResults.length > 0 ? (
          searchResults.map((video, index) => (
            <Card sx={{ display: 'flex', borderRadius: '10px', mb: 2, width: "70%", height:"200px", marginBottom:"10px" }} key={index} onClick={() => handleVideoClick(video.id)}>
              <CardMedia
                component='img'
                sx={{ width:"40%",  objectFit:"fill" }}
                image={video.img}
                alt={video.video}
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {video.video}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  {video.user}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary' component='div'>
                  Tag: {video.tag}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant='h6' color='text.secondary'>
            No results found.
            
          </Typography>
        )}
      </div>

  );
};

export default Search;
