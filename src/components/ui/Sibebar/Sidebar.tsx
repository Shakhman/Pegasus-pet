import { Divider, Drawer, List, Toolbar, useTheme } from '@mui/material';
import { useMemo } from 'react';

import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';

const drawerWidth = 290;

export default function  Sidebar() {
  const { palette } = useTheme();

  const dividerBGColor = useMemo(() => {
    return palette.mode === 'light' ? palette.primaryLight.light : 'rgba(255, 255, 255, 0.10)';
  }, [palette.mode]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: (theme) => theme.palette.box[theme.palette.mode],
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ p: 6, display: 'block' }}>
        <Logo />
      </Toolbar>
      <Divider sx={{ borderColor: dividerBGColor }}></Divider>
      <List>
        <NavItems />
      </List>
    </Drawer>
  );
}