import MuiListItemText from '@mui/material/ListItemText';
import React from 'react';

type ListItemTextProps = {
  primary?: React.ReactNode;
};

const ListItemText = ({ primary }: ListItemTextProps) => {
  return <MuiListItemText primary={primary} />;
};

export default React.memo(ListItemText);
