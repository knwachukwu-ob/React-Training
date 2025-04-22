import MuiListItem from '@mui/material/ListItem';
import React from 'react';

type ListItemProps = {
  disablePadding?: boolean;
  children?: React.ReactNode;
};

const ListItem = ({ disablePadding, children }: ListItemProps) => {
  return <MuiListItem disablePadding={disablePadding}>{children}</MuiListItem>;
};

export default React.memo(ListItem);
