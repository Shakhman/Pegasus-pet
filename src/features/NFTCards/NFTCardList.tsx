import { Grid } from '@mui/material';
import NFTCardItem from './NFTCardItem';
import { useFetchNFTCards } from './use-fetch-nft-cards';

export default function NFTCardList() {
  const filteredCards = useFetchNFTCards();

  return (
    <Grid container rowGap={3}>
      {filteredCards.map((item, key) => (
        <Grid item key={key} xs={4}>
          <NFTCardItem {...item}></NFTCardItem>
        </Grid>
      ))}
    </Grid>
  );
}
