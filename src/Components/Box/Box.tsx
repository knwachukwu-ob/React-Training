import MuiBox from '@mui/material/Box';
import React from 'react';

type BoxProps = {
  component?: any;
  children?: React.ReactNode;
  className?: string;
  role?: any;
};

const Box = ({ children, className, component, role }: BoxProps) => {
  return (
    <MuiBox className={className} component={component} role={role}>
      {children}
    </MuiBox>
  );
};

export default React.memo(Box);
