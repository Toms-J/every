import './App.css';
import * as React from 'react'
import ElevateAppBar from './components/navbar/index';
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CssBaseline } from '@mui/material';
import { lightThemeOptions, darkThemeOptions } from './theme';
import PrimarySearchAppBar from './components/navbar/index';

function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const theme = React.useMemo(
      () =>
        prefersDarkMode? createTheme(darkThemeOptions) : createTheme(lightThemeOptions)
      [prefersDarkMode],
    );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar></PrimarySearchAppBar>
        <div className='hero'>
         
            {/* <h1 className="hero-title">
              every
            </h1>
            <h2 className='hero-subtitle game'>
              game
            </h2>
            <h2 className='hero-subtitle device'>
              device
            </h2>
            <h2 className='hero-subtitle free'>
              free
            </h2> */}
        </div>
    </ThemeProvider>
  );
}

export default App;
