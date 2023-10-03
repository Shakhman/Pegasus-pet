import { createStyles, makeStyles, } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primaryAlt[theme.palette.mode],
      marginBottom: 8,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '14px',
      letterSpacing: '-0.28px',
    },
  }),
);