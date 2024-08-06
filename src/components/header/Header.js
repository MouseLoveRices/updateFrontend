import * as React from 'react';
import {AppBar,Box,CssBaseline,Divider,Drawer,ListItem,List,ListItemButton,ListItemText,Button,Toolbar,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../img/logo.png';
import './header.css';

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

export default function Header({ children }, props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(navItems[0].name); // Default active item

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} style={{ height: 'auto' }} alt='logo' />
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={logo} style={{ height: '50px' }} alt='logo' />
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