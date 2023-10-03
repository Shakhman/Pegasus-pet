import { PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    primaryLight: PaletteColor;
    secondaryLight: PaletteColor;
    primaryAlt: PaletteColor;
    box: PaletteColor;
    mainText: PaletteColor;
    secondaryText: PaletteColor;
    button: PaletteColor;
  }

  interface PaletteOptions {
    primaryLight: PaletteColorOptions;
    primaryAlt: PaletteColorOptions;
    secondaryLight: PaletteColorOptions;
    box: PaletteColorOptions;
    mainText: PaletteColorOptions;
    secondaryText: PaletteColorOptions;
    button: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryLight: true;
    box: true;
    mainText: true;
    secondaryText: true;
    secondaryLight: true;
    button: true
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    primaryAlt: true;
  }
}

declare module '@mui/material/SVGIcon' {
  interface SvgIconPropsColorOverrides {
    primaryLight: true;
    secondaryLight: true;
    primaryAlt: true;
    box: true;
    mainText: true;
    secondaryText: true;
  }
}