import MuiLink from '@mui/material/Link';
import React from 'react';

type LinkProps = {
  children?: React.ReactNode;
  component?: any;
  to?: string;
};

const Link = ({ children, component, to }: LinkProps) => {
  return (
    <MuiLink component={component} to={to}>
      {children}
    </MuiLink>
  );
};

export default React.memo(Link);
