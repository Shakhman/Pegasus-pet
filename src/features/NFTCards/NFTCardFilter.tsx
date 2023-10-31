import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setNFTFilter, clearNFTFilter } from './nft-cards-slice';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export default function NFTCardFilter() {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch = useAppDispatch();

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
      dispatch(clearNFTFilter());
    };
  }, [dispatch]);

  const onFilterClick = (value: string) => {
    setSelected(() => {
      dispatch(setNFTFilter(value));
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
