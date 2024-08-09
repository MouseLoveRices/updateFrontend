import React from 'react';
import Body from '../body/Body';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Search = () => {
  const searchResults = useSelector((state) => state.list.searchResults);

  return (
    <Body>
      <div>
        <h2>Search Results</h2>
        {searchResults.length > 0 ? (
          searchResults.map((video, index) => (
            <Card sx={{ display: 'flex', borderRadius: '10px', mb: 2, width: "80%", height:"200px" }} key={index}>
              <CardMedia
                component='img'
                sx={{ width:"80%",  objectFit:"fill" }}
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
    </Body>
  );
};

export default Search;
