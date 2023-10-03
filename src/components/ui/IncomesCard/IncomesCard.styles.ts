import { createStyles, makeStyles, } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrapper: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      display: 'flex',
      backgroundColor: theme.palette.secondary[theme.palette.mode],
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);