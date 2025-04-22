import { createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      drawerWidth: number;
      appBarHeight: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      drawerWidth?: number;
      appBarHeight?: number;
    };
  }
}

const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        custom: {
          drawerWidth: 15,
          appBarHeight: 4,
        },
      }),
    [prefersDarkMode]
  );
};

export default useTheme;
