import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  height: `${theme.custom.appBarHeight}rem`,
  width: `calc(100% - ${theme.custom.drawerWidth}rem)`,
  marginLeft: `${theme.custom.drawerWidth}rem`,
}));

interface AppBarProps {
  children: React.ReactNode;
}

const AppBar = ({ children }: AppBarProps) => {
  return <StyledAppBar position='fixed'>{children}</StyledAppBar>;
};

export default React.memo(AppBar);
