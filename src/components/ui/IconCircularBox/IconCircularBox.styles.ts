import { createStyles, makeStyles, } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { IconCircularBoxProps } from './IconCircularBox';

const sizeMapping = {
  small: '24px',
  medium: '32px',
  large: '56px'
};

const getVariantBgColor = (theme: Theme) => {
  return {
    solid: theme.palette.secondary[theme.palette.mode],
    gradient: 'linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
  };
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: IconCircularBoxProps) => {
        console.log(props);
        return sizeMapping[props.size!];
      },
      height:  (props: IconCircularBoxProps) => sizeMapping[props.size!],
      borderRadius: '50%',
      display: 'flex',
      background: (props: IconCircularBoxProps) => getVariantBgColor(theme)[props.variant!],
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);