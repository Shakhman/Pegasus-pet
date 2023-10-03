import SignInForm from '@/components/SignInForm/SignInForm';
import { Grid } from '@mui/material';

export default function SignInView() {
  return (
    <Grid
      container
      height="100dvh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <SignInForm />
      </Grid>
    </Grid>
  );
}
