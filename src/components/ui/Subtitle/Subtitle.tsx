import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { PropsWithChildren } from 'react';

type Subtitle = {
    variant?: Variant
} & PropsWithChildren;

export default function Subtitle(props: Subtitle) {
  const { children, variant = 'subtitle1' } = props;
  const subtitleColor = useCurrentThemeColor('secondaryLight');

  return (
    <Typography variant={variant} sx={{ color: subtitleColor }}>
      {children}
    </Typography>
  );
}
