import RevenueChart from '@/components/RevenueChart/RevenueChart';
import IncomesCardList from '@/components/ui/IncomesCardList/IncomesCardList';
import UserTable from '@/components/UsersTable/UserTable';
import { Box, Grid, Typography } from '@mui/material';

export default function Main() {
  return (
    <>
      <IncomesCardList />
      <Grid container py={3} spacing={3}>
        <Grid item md={6}>
          <RevenueChart />
        </Grid>
        <Grid item md={6}>
          <Box sx={{
            px: 4,
            py: 3,
            borderRadius: '20px',
            backgroundColor: (theme) => theme.palette.box[theme.palette.mode],
            height: '345px',
            overflowY: 'auto',
          }}>
            <Typography variant='h4'>User Table</Typography>
            <UserTable />
          </Box> 
        </Grid>
      </Grid>
    </>
  );
}
