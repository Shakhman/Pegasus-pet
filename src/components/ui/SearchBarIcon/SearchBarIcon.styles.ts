import { createStyles, makeStyles, } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      color: theme.palette.secondaryLight[theme.palette.mode],
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
  }),
);