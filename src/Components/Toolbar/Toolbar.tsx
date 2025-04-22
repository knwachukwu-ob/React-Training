import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import React from 'react';

const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  height: `${theme.custom.appBarHeight}rem`,
}));

type ToolbarProps = {
  children?: React.ReactNode;
};

const Toolbar = ({ children }: ToolbarProps) => {
  return <StyledToolbar>{children}</StyledToolbar>;
};

export default React.memo(Toolbar);
