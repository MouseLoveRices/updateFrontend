import React, { useState } from 'react';
import logo from '../../img/logo.png';
import userDefalut from '../../img/defaultUser.jpg';
import './newHeader.css';
import { Avatar, Box, Typography } from '@mui/material';
import { Modal} from 'reactstrap';

export default function NewHeader({ children }) {
  const [open, setOpen] = useState(false);
  

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
            <button > 
              <i className="fa-solid fa-bars"></i>
            </button>
            <img src={logo} alt="logo" style={{ width: "130px" }} />
          </div>
          <div className='search'>
            <input type='text' placeholder='Search' />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className='userLocal'>
            <button onClick={() => setOpen(true)}>
              <i className="fa-regular fa-bell"></i>
            </button>
            <Avatar src={userDefalut} alt="avatar" />
            <Modal isOpen={open} toggle={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Notifications
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Comeback soon...
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

  );
}
