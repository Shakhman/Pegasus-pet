import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { OutlinedInput, Typography, InputAdornment, IconButton, FormControl, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';

import InputLabel from '@/components/ui/InputLabel/BaseInputLabel';
import { AuthContext } from '@/contexts/AuthContext';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required'),
  password: yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Required') 
});

type SignInData = {
  email: string,
  password: string,
}

export default function SignInForm() {
  const infoTextColor = useCurrentThemeColor('secondaryLight');
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInData>({ 
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'all'
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit: SubmitHandler<SignInData> = (data) => {
    console.log(data);
    setIsAuth(true);
    navigate('/');
  };

  const formData = [{
    ...register('email', { required: true, }),
    id: 'email',
    type: 'email',
    placeholder: 'Email',
    autoFocus: true,
    error: !!errors.email
  }, {
    ...register('password', { required: true, minLength: 6 }),
    id: 'password',
    type: showPassword ? 'text' : 'password',
    placeholder: 'Password',
    error: !!errors.password,
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={(event) => event.preventDefault()}
          onMouseUp={(event) => event.preventDefault()}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    )
  }];

  return (
    <>
      <Typography variant='h2'>Sign In</Typography>
      <Typography variant='subtitle1' sx={{
        color: infoTextColor
      }}>
        Enter your email and password to sign in!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map(data => (
          <FormControl key={data.id} fullWidth sx={{ my: 2 }}>
            <InputLabel htmlFor={data.id}>{data.placeholder}*</InputLabel>
            <OutlinedInput
              sx={{ borderRadius: '16px' }}
              {...data}
            />
            <div>{ errors[data.name]?.message }</div>
          </FormControl>
        ))}
        <Button
          variant='contained'
          type="submit"
          sx={{ width: '100%', borderRadius: 15, py: '10px', mt: 2 }}
          disabled={!isValid}
        >
          Sign In
        </Button>
      </form>
    </>
  );
}
