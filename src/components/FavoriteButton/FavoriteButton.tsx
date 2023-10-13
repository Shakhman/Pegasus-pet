import { IconButton, IconButtonProps } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Value = boolean;

type FacoriteButtonProps = {
  handleClick: (state: Value) => void,
  value?: Value,
  size?: IconButtonProps['size'],
}

export default function FavoriteButton(props: FacoriteButtonProps) {
  const { handleClick, value = false, size = 'small' } = props;
  // const [selected, setSelected] = useState<Value>(value);

  function onButtonClick() {
    // setSelected(prev => {
    //   const newState = !prev;
    //   handleClick(newState);

    //   return newState;
    // });

    handleClick(!value);
  }

  return (
    <IconButton aria-label='add-to-favorite' size={size} disableRipple sx={
      { 
        backgroundColor: '#FFF',
        '& .MuiSvgIcon-root': {
          fill: (theme) => value ? theme.palette.primaryAlt.main : null
        },
        '&:hover': {
          backgroundColor: '#FFF',
          '& .MuiSvgIcon-root': {
            fill: (theme) => value ?  theme.palette.primary.main : theme.palette.primaryAlt.main
          }
        }
      }
    } onClick={onButtonClick}>
      {value ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
