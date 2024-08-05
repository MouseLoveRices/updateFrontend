import * as React from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Button, Typography, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../img/logo.png';

const drawerWidth = 200;
const navItems = ['Home', 'About', 'Contact'];

export default function Header({children},props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <img src={logo} style={{height:"50px"}} alt='logo'/> 
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center'}}>
                <ListItemText primary={item}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" style={{color:"aqua"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <div style={{width:'100%', display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <img src={logo} style={{height:"50px"}} alt='logo'/>            
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                    </Button>
                ))}
                </Box>
            </div>
            
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
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
            {children}
        </Box>
      </Box>
    );
  }

