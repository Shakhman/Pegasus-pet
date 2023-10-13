import { setNFTCardFilter } from '@/store/nft-cards/nft-cards-actions';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function NFTCardFilter() {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch = useDispatch();

  const filters = [
    {
      name: 'Art',
      value: 'art',
    },
    {
      name: 'Music',
      value: 'music',
    },
    {
      name: 'Sport',
      value: 'sport'
    }
  ];

  useEffect(() => {
    return () => {
      dispatch(setNFTCardFilter(''));
    };
  }, [dispatch]);

  const onFilterClick = (value: string) => {
    setSelected(() => {
      dispatch(setNFTCardFilter(value));
      return value;
    });
  };

  return (
    <Grid container justifyContent="end" gap={2}>
      {filters.map(filter => (
        <Button
          key={filter.value}
          variant={selected === filter.value ? 'contained' : 'text'}
          color={selected === filter.value ? 'button' : 'primary'}
          onClick={() => onFilterClick(filter.value)}
          size='small'
          sx={{
            borderRadius: '35px'
          }}
        >
          {filter.name}
        </Button>
      ))}
    </Grid>
  );
}
