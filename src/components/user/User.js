import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../redux/userSlices';
import { Avatar, Typography } from '@mui/material';

export default function User() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.listUser); // Get loading state
  const user = listUser.find((user) => user.id === id);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (!user) {
    return <div>Loading....</div>; // Handle case where user is not found
  }

  return (
    <div>
      <Avatar src={user.avatar} alt={user.user} style={{ width: '10%', height: '20%' }}/>       
      <Typography variant="h2">{user.user}</Typography>
      <hr />
    </div>
  );
}
