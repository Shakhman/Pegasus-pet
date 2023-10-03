import { Button, Grid } from '@mui/material';
import { useState } from 'react';


type NFTCardFilterProps = {
    handleSelectedFilter: (value: string) => void
}

export default function NFTCardFilter(props: NFTCardFilterProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const { handleSelectedFilter } = props;

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

  const onFilterClick = (value: string) => {
    setSelected(() => {
      handleSelectedFilter(value);
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
