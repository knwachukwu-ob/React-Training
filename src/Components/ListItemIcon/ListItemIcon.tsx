import MuiListItemIcon from '@mui/material/ListItemIcon';
import React from 'react';

type ListItemIconProps = {
  children?: React.ReactNode;
};

const ListItemIcon = ({ children }: ListItemIconProps) => {
  return <MuiListItemIcon>{children}</MuiListItemIcon>;
};

export default React.memo(ListItemIcon);
