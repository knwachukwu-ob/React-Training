import MuiListItemButton from '@mui/material/ListItemButton';
import React from 'react';

type ListItemButtonProps = {
  children?: React.ReactNode;
  component?: any;
};

const ListItemButton = ({ children, component }: ListItemButtonProps) => {
  return (
    <MuiListItemButton component={component}>{children}</MuiListItemButton>
  );
};

export default React.memo(ListItemButton);
