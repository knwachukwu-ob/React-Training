import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  height: `${theme.custom.appBarHeight}rem`,
  width: `${theme.custom.drawerWidth}rem`,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: `${theme.custom.drawerWidth}rem`,
    boxSizing: 'border-box',
  },
}));

interface DrawerProps {
  children?: React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return (
    <StyledDrawer variant='permanent' anchor='left'>
      {children}
    </StyledDrawer>
  );
};

export default React.memo(Drawer);
