import image from '@/assets/card-placholder.jpeg';
import { Grid } from '@mui/material';
import NFTCard from '../NFTCard/NFTCard';
import { useMemo } from 'react';


const data = [
  {
    title: 'Abstarct SS',
    author: 'Shalhman M.',
    bid: 2.22,
    img: image,
    users: ['Shakman M', 'Ololo Kek', 'Measd A', 'Ed El'],
    tags: ['music', 'art']
  },
  {
    title: 'Nwe SS',
    author: 'Shalhman M.',
    bid: 1.02,
    img: image,
    users: ['shakman M', 'Ololo'],
    tags: ['art']
  },
  {
    title: 'Brain SS',
    author: 'Shalhman M.',
    bid: 2.00,
    img: image,
    users: ['Shakman M', 'Ololo Kek'],
    tags: ['music'],
  },
  {
    title: 'Abstarct SS',
    author: 'Shalhman M.',
    bid: 22.22,
    img: image,
    users: ['Shakman M', 'Ololo Kek'],
    tags: ['music'],
  },
  {
    title: 'Abstarct SS',
    author: 'Shalhman M.',
    bid: 3.11,
    img: image,
    tags: ['sport'],
  },
  {
    title: 'Mood SS',
    author: 'Shalhman M.',
    bid: 2.22,
    img: image,
    tags: ['sport'],
  },
  {
    title: 'Jooly SS',
    author: 'Shalhman M.',
    bid: 2.22,
    img: image,
    tags: ['sport', 'music'],
  },
  {
    title: 'Abstarct SS',
    author: 'Shalhman M.',
    bid: 2.22,
    img: image,
    users: ['Shakman M', 'Ololo Kek'],
    tags: ['music']
  },
];

type NFTCardList = {
    selectedFilter: string | null
}

export default function NFTCardList(props: NFTCardList) {
  const filteredData = useMemo(() => {
    if (!props.selectedFilter) {
      return data;
    }

    return data.filter(item => item.tags.includes(props.selectedFilter as string));
  }, [props.selectedFilter]);

  return (
    <Grid container rowGap={3}>
      {filteredData.map((item, key) => (
        <Grid item key={key} xs={4}>
          <NFTCard {...item}></NFTCard>
        </Grid>
      ))}
    </Grid>
  );
}
