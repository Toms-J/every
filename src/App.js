import './App.css';
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lightThemeOptions, darkThemeOptions } from './theme';
import Homepage from './pages/homepage';
import Login from './pages/login';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const theme = React.useMemo(
      () =>
        prefersDarkMode? createTheme(darkThemeOptions) : createTheme(lightThemeOptions)
      [prefersDarkMode],
    );

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login",
        element: <div>Login</div>,
      },
    ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
