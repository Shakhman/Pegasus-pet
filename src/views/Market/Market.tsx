import { Grid } from '@mui/material';
import NFTCardList from '@/features/NFTCards/NFTCardList';
import NFTCardFilter from '@/features/NFTCards/NFTCardFilter';

export default function Market() {
  return (
    <Grid container rowGap={3}>
      <Grid item md={12} textAlign="end">
        <NFTCardFilter />
      </Grid>
      <Grid item md={12}>
        <NFTCardList />
      </Grid>
    </Grid>
  );
}
