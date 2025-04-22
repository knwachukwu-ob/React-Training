import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from '@mui/material/Container';
import React from 'react';

const Container = ({ children }: MuiContainerProps) => {
  return <MuiContainer>{children}</MuiContainer>;
};

export default React.memo(Container);
