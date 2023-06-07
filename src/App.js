import './App.css';
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CssBaseline } from '@mui/material';
import { lightThemeOptions, darkThemeOptions } from './theme';
import PrimarySearchAppBar from './components/navbar/index';
import Carousel from './components/main-carousel';
import TopCarousel from './components/top-carousel';

function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const theme = React.useMemo(
      () =>
        prefersDarkMode? createTheme(darkThemeOptions) : createTheme(lightThemeOptions)
      [prefersDarkMode],
    );


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar></PrimarySearchAppBar>
          <TopCarousel />
          <Carousel />
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
      </ThemeProvider>
    </>
  );
}

export default App;
