import React, { useState } from 'react';
import logo from '../../img/logo.png';
import userDefalut from '../../img/defaultUser.jpg';
import './newHeader.css';
import { Avatar, Box, Typography } from '@mui/material';
import { Modal } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchVideos } from '../../redux/testSlice';

export default function NewHeader({ toggleSidebar }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(searchVideos(searchQuery));
    navigate('/search');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='head'>
      <div className='contain'>
        <div className='action'>
          <button onClick={toggleSidebar}>
            <i className='fa-solid fa-bars'></i>
          </button>
          <img src={logo} alt='logo' style={{ width: '130px' }} />
        </div>
        <div className='search'>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </div>
        <div className='userLocal'>
          <button onClick={() => setOpen(true)}>
            <i className='fa-regular fa-bell'></i>
          </button>
          <Avatar src={userDefalut} alt='avatar' />
          <Modal
            isOpen={open}
            toggle={() => setOpen(false)}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Notifications
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                Comeback soon...
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
