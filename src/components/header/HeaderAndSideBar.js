import * as React from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer, IconButton, ListItemIcon, Toolbar} from '@mui/material';
import {List, ListItemButton, ListItemText, Avatar, Input, Typography, Modal} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Send } from '@mui/icons-material';
import { Button} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlices';
import logo from '../../img/logo.png';
import userAvatar from '../../img/defaultUser.jpg'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

export default function Header({ children, window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const {listUser} = useSelector(state=>state.listUser)
  const navigate = useNavigate()
  
  React.useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleLogoClick=()=>{
    navigate('/')
  }
  const handleUserClick = (id) => {
    navigate(`/user/${id.toString()}`);  // Ensure this is a string
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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Send Mail" />
        </ListItemButton>
      </List>
      <hr />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Send Mail" />
        </ListItemButton>
      </List>
      <hr/>
      <h4 style={{textAlign:"center"}}>Subscriptions</h4>
      {
            listUser.map((item,index)=>(
              <div key={index}  style={{display:"flex", alignItems:"center", marginBottom:"10px", marginLeft:"10px"}} >                
                <Avatar src={item.avatar} alt="user avatar" style={{ display: 'inline-flex', marginRight:"10px" }} onClick={()=>handleUserClick(item.id)}/> 
                <span onClick={()=>handleUserClick(item.id)}>{item.user}</span>       
              </div> 
                
            ))
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{ height: '40px', marginBottom: '5px' }} onClick={handleLogoClick}/>
          <Input type='text' placeholder='Search'/>
          <div style={{display:"inline-flex", alignItems:"center"}}>
            <Button onClick={handleOpen} style={{background:"none",border:"none"}}>
              <NotificationsNoneIcon style={{fontSize:"30px", marginRight:"10px",color:"black"}}/>
            </Button>
            
            <Avatar src={userAvatar} alt='user Signed'/>
            <Modal
              open={open}
              onClose={handleClose}
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}