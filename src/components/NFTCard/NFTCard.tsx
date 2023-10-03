import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import Subtitle from '../ui/Subtitle/Subtitle';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Grid } from '@mui/material';

type NFTCardProps = {
    title: string,
    author: string,
    bid: number,
    img: string,
    tags: string[]
    users?: string[],
}

export default function NFTCard(props: NFTCardProps) {
  const { title, author, bid, img, users = [] } = props; 
  const bidColor = useCurrentThemeColor('primary');


  const genAvatarName = (name: string) => {
    const [firstName, lastName] = name.split(' ');

    return [firstName, lastName].map(str => str?.at(0)?.toUpperCase());
  };

  return (
    <Card sx={{ maxWidth: 350, p: 2, borderRadius: '20px'  }}>
      <CardMedia
        sx={{ height: 205, borderRadius: '15px', textAlign: 'right', p: 2 }}
        image={img}
        title={title}
      >
        <FavoriteButton handleClick={() => ({})}/>
      </CardMedia>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Subtitle>
            By {author}
            </Subtitle>
          </Grid>
          <Grid item>
            <AvatarGroup max={3} spacing='small' sx={{
              '& .MuiAvatar-root': {
                width: 30,
                height: 30,
                fontSize: 14,
              }
            }}>
              {users.map(user => (
                <Avatar key={user}>{genAvatarName(user)}</Avatar>
              ))}
            </AvatarGroup>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h6' color={bidColor}>Current Bid: {bid} ETH</Typography>
        <Button disableElevation size="medium" variant='contained' color="button" sx={{
          borderRadius: '70px'
        }}>Place Bid</Button>
      </CardActions>
    </Card>
  );
}