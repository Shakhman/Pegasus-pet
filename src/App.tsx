import ThemeModeProvider from './contexts/ThemeModeContext';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import AppRouter from './AppRouter';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ThemeModeProvider>
  );
}

export default App;
