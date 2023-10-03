import { Box, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Breadcrumbs from '../ui/Breadcrumbs/Breadcrumbs';
import Sidebar from '../ui/Sibebar/Sidebar';
import Title from '../ui/Title/Title';

import { usePageName } from '@/hooks/usePageName';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';

import SearchBar from '../ui/SearchBar/SearchBar';


export default function DashboardLayout() {
  const { title, breadcrumb } = usePageName();
  const currentThemeTitleColor = useCurrentThemeColor('primaryAlt');
  const currentThemeBoxColor = useCurrentThemeColor('secondary'); 

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar></Sidebar>
      <Box
        component="main"
        sx={{ 
          backgroundColor: currentThemeBoxColor,
          px: '30px',
          py: '48px',
          height: '100vh',
          flexGrow: 1,
        }}
      >
        <Grid container>
          <Grid container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item>
              <Breadcrumbs>
                {breadcrumb}
              </Breadcrumbs>
              <Title color={currentThemeTitleColor}>{title}</Title>
            </Grid>
            <Grid item>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <br />
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
