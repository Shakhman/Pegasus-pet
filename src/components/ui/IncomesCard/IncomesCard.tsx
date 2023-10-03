import { Grid, Paper, SvgIconProps, Typography } from '@mui/material';
import Subtitle from '../Subtitle/Subtitle';
import IconCircularBox from '../IconCircularBox/IconCircularBox';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';


export type IncomesCardProps = {
  title: string,
  text: string,
  infoText?: JSX.Element
  Icon?: (props: SvgIconProps) => JSX.Element,
  variant: 'solid' | 'gradient'
};
export default function IncomesCard(props: IncomesCardProps) {
  const infoTextColor = useCurrentThemeColor('secondaryLight');

  return (
    <Paper elevation={0} color="box" sx={{
      width: 248,
      borderRadius: '20px',
      height: 97,
      backgroundColor: (theme) => theme.palette.box[theme.palette.mode],
      display: 'flex',
      px: '17px',
    }}>
      <Grid container direction="row" alignItems="center"  gap="18px">
        <Grid item>
          {props.Icon &&
            <IconCircularBox Icon={props.Icon} variant={props.variant} />
          }
        </Grid>
        <Grid item>
          <Subtitle>
            {props.title}
          </Subtitle>
          <Typography variant='h4'>
            {props.text}
          </Typography>
          {props.infoText && 
            <Typography variant='body2' sx={{
              '&.MuiTypography-body2': {
                color: infoTextColor
              }
            }}>
              {props.infoText}
            </Typography>
          }
        </Grid>
      </Grid>
    </Paper>
  );
}
