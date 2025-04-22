import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { ToastContainer as ToastifyToastContainer } from 'react-toastify';

const ToastContainer = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ToastifyToastContainer
      position='top-right'
      autoClose={2000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={prefersDarkMode ? 'dark' : 'light'}
    />
  );
};

export default React.memo(ToastContainer);
