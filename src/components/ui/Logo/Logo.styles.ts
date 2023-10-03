import { createStyles, makeStyles, } from '@mui/styles';
export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: 'Poppins',
      fontSize: 26,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '100%',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: (props: {color: string}) => props.color,
    },
  }),
);