import { Palette, PaletteColor, useTheme } from '@mui/material';

export function useCurrentThemeColor(color: keyof Palette) {
  const theme = useTheme();

  return (theme.palette[color] as PaletteColor)[theme.palette.mode];
}