import React, { useEffect, useState } from 'react';
import './body.css';
import WebIcon from '@mui/icons-material/Web';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NewHeader from '../header/NewHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlices';
import { Avatar, Dialog, DialogContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Body({ children }) {
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.listUser);
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleClickUser = (id) => {
    navigate(`/user/${id.toString()}`);
  };

  const toggleSidebar = () => {
    if (window.innerWidth > 1000) {
      setSidebarOpen(!isSidebarOpen);
    } else {
      setDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleAboutUsClick =()=>{
    navigate('/us')
  }
  const handleContactUs =()=>{
    navigate('/contact')
  }

  const handleHistoryClick = ()=>{
    navigate('/history')
  }

  const handleWatchLater=()=>{
    navigate('/later')
  }

  return (
    <>
      <NewHeader toggleSidebar={toggleSidebar} />
      <div className='bodyOfPage'>
        <div className={`sideBar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className='infor'>
            <h4>We</h4>
            <button onClick={handleAboutUsClick}>
              <WebIcon />
              {isSidebarOpen && <p>About us</p>}
            </button>
            <button onClick={handleContactUs}>
              <ConnectWithoutContactIcon />
              {isSidebarOpen && <p>Contact us</p>}
            </button>
          </div>
          <hr/>
          <div className='you'>
            <h4>You</h4>
            <button onClick={handleHistoryClick}>
              <i className='fa-solid fa-clock-rotate-left'></i>
              {isSidebarOpen && <p>History</p>}
            </button>
            <button onClick={handleWatchLater}>
              <i className='fa-regular fa-star'></i>
              {isSidebarOpen && <p>Watch later</p>}
            </button>
          </div>
          <hr />
          <div className='userSubscribed'>
            <h4>Subs</h4>
            {listUser.map((item, index) => (
              <button key={index} onClick={() => handleClickUser(item.id)}>
                <Avatar src={item.avatar} alt='avatar' />
                {isSidebarOpen && <p>{item.user}</p>}
              </button>
            ))}
          </div>
        </div>

        <div
          className='childrenItem'
          style={{ width: isSidebarOpen ? '85%' : '95%' }}
        >
          {children}
        </div>
      </div>

      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth='sm'>
        <DialogContent>
          <div className='infor'>
            <h4>More Info</h4>
            <Button startIcon={<WebIcon />} fullWidth onClick={handleAboutUsClick}>
              About us
            </Button>
            <Button startIcon={<ConnectWithoutContactIcon />} fullWidth onClick={handleContactUs}>
              Contact us
            </Button>
          </div>
          <hr />
          <div className='you'>
            <h4>You</h4>
            <Button startIcon={<i className='fa-solid fa-clock-rotate-left'></i>} fullWidth onClick={handleHistoryClick}>
              History
            </Button>
            <Button startIcon={<i className='fa-regular fa-star'></i>} fullWidth onClick={handleWatchLater}>
              Watch later
            </Button>
          </div>
          <hr />
          <div className='userSubscribed'>
            <h4>Subscribed</h4>
            {listUser.map((item, index) => (
              <Button
                key={index}
                startIcon={<Avatar src={item.avatar} alt='avatar' />}
                fullWidth
                onClick={() => handleClickUser(item.id)}
              >
                {item.user}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
