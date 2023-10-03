import { Box, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import BackgroundImg from '@/assets/sing-in-bg.png';
import Logo from '@/components/ui/Logo/Logo';

export default function MainLayout() {
  return (
    <Grid container>
      <Grid item md={6}>
        <Outlet/>
      </Grid>
      <Grid item md={6}>
        <Box sx={{
          height: '100dvh',
          backgroundImage: `url('${BackgroundImg}')`,
          borderBottomLeftRadius: 125,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& div': {
            m: 0
          },
        }}>
          <Logo color="white"></Logo>
        </Box>
      </Grid>
    </Grid>
  );
}
