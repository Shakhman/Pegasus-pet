import { PropsWithChildren, createContext, useMemo,  useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });

type ThemeVariants = 'light' | 'dark';

export default function ThemeModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ThemeVariants>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'DM Sans',
          fontSize: 14,
          subtitle1: {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '24px',
            letterSpacing: '-0.28px',
          },
          h2: {
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '56px',
            letterSpacing: '-0.72px'
          },
          h3: {
            fontSize: 34,
            fontWeight: 700 
          },
          h4: {
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '32px',
            letterSpacing: '-0.48px'
          },
          h5: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '30px',
            letterSpacing: '-0.36px'
          },
          h6: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '-0.28px'
          },
          body2: {
            fontSize: 12,
            letterSpacing: '-0.24px',
          },
          button: {
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '24px',
            letterSpacing: '-0.28px',
            textTransform: 'capitalize',
          },
        },
        palette: {
          mode,
          primary: {
            main: '#4318FF',
            light: '#4318FF',
            dark: '#FFF'
          },
          primaryLight: {
            main: '#E9E3FF',
            light: '#E9E3FF',
            dark: '#E9E3FF',
          },
          primaryAlt: {
            main: '#2B3674',
            light: '#2B3674',
            dark: '#FFFFFF',
          },
          secondary: {
            main: '#F4F7FE',
            light: '#F4F7FE',
            dark: '#0B1437'
          },
          secondaryLight: {
            main: '#A3AED0',
            light: '#A3AED0',
            dark: '#FFF'
          },
          box: {
            main: '#FFF',
            light: '#FFF',
            dark: '#111C44'
          },
          mainText: {
            main: '#8F9BBA',
            light: '#8F9BBA',
            dark: '#FFFFFF'
          },
          secondaryText: {
            main: '#2B3674',
            light: '#2B3674',
            dark: '#FFFFFF'
          },
          success: {
            main: '#05CD99',
            light: '#05CD99',
            dark: '#01B574',
          },
          button: {
            main: '#11047A',
            light: '#11047A',
            dark: '#7551FF',
            contrastText: '#FFF'
          }
        },
      }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={ theme }>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}


