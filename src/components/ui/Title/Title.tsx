import { PropsWithChildren  } from 'react';
import { Typography } from '@mui/material';

type TitleProps = PropsWithChildren & {
  color?: string
};

export default function Title(props: TitleProps) {
  return (
    <>
      <Typography variant='h3' sx={{
        color: props.color
      }}>{props.children}</Typography>
    </>
  );
}
