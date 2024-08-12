import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../img/logo.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;
const navItems = [
  { name: 'Home', id: 'banner' },
  { name: 'Target', id: 'category' },
  { name: 'Colaboration', id: 'colabor' },
  { name: 'Style', id: 'style' },
  { name: 'Aims', id: 'aims' },
  { name: 'Policies', id: 'policy' },
  { name: 'About us', id: 'aboutUs' },
  { name: 'Contact', id: 'co-founder' },
];

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(navItems[0].name); // Default active item
  const navigate= useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleButtonClick = (itemName, itemId) => {
    setActiveItem(itemName);
    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick= ()=>{
    navigate('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = navItems[0].name;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          // Cập nhật điều kiện phát hiện phần trong khung nhìn
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            currentSection = item.name;
          }
        }
      });

      if (currentSection !== activeItem) {
        setActiveItem(currentSection);
      }
    };

    if (typeof window !== 'undefined') { // Kiểm tra window có tồn tại
      window.addEventListener('scroll', handleScroll);
    }

    // Clean up event listener on component unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeItem]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} style={{ height: '50px', marginTop: '5px' }} alt='logo' onClick={handleLogoClick}/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleButtonClick(item.name, item.id)}
              className={activeItem === item.name ? 'active' : ''}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'aqua' }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={logo} style={{ height: '50px' }} alt='logo' onClick={handleLogoClick}/>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: '#fff' }}
                  onClick={() => handleButtonClick(item.name, item.id)}
                  className={activeItem === item.name ? 'active' : ''}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
