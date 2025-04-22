import MuiList from '@mui/material/List';
import React from 'react';

type ListProps = {
  children: React.ReactNode;
};

const List = ({ children }: ListProps) => {
  return <MuiList>{children}</MuiList>;
};

export default React.memo(List);
