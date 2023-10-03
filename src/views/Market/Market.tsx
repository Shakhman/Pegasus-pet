import { Grid } from '@mui/material';
import NFTCardList from '@/components/NFTCardList/NFTCardList';
import NFTCardFilter from '@/components/NFTCardFilter/NFTCardFilter';
import { useState } from 'react';

export default function Market() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  return (
    <Grid container rowGap={3}>
      <Grid item md={12} spacing={2} textAlign="end">
        <NFTCardFilter handleSelectedFilter={setSelectedFilter}/>
      </Grid>
      <Grid item md={12}>
        <NFTCardList selectedFilter={selectedFilter}/>
      </Grid>
    </Grid>
  );
}
