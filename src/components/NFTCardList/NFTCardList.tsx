import { Grid } from '@mui/material';
import NFTCard from '../NFTCard/NFTCard';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredNFTCards, getSelectedFilter } from '@/store/nft-cards/nft-cards-selectors';
import { useEffect } from 'react';
import { fetchNFTCards } from '@/store/nft-cards/nft-cards-actions';

export default function NFTCardList() {
  const dispatch = useDispatch<any>();
  // const selectedFilter = useSelector(getSelectedFilter);

  const filteredCards = useSelector(getFilteredNFTCards);

  console.log('list');

  useEffect(() => {
    dispatch(fetchNFTCards());
  }, []);

  return (
    <Grid container rowGap={3}>
      {filteredCards.map((item, key) => (
        <Grid item key={key} xs={4}>
          <NFTCard {...item}></NFTCard>
        </Grid>
      ))}
    </Grid>
  );
}
