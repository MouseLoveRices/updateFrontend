import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../redux/userSlices';
import { Avatar } from '@mui/material';

export default function User() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const {listUser} = useSelector(state => state.listUser);
    const user = listUser.find(user => user.id === id);
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

    
  return (
    <div>
        <Avatar src={user.avatar} alt={user.user} style={{width:"15%", height:"auto"}}/>
        <h1>{user.user}</h1>
        <hr/>
        
    </div>
  );
}
