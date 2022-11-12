import { Box, Drawer } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import MenuNav from './MenuNav';
import { MAIN_PADDING } from '../utils/constants';

export default function Layout() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const drawerWidth = 240;
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box>
      <Header handleMenuToggle={handleMenuToggle} />
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={menuOpen}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <MenuNav handleMenuToggle={handleMenuToggle} />
        </Drawer>
      </Box>
      <Box component="main" sx={{ padding: `${MAIN_PADDING}px` }}>
        <Outlet />
      </Box>
    </Box>
  );
}
