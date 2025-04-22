import MuiTypography from '@mui/material/Typography';
import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  component?: any;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit';
  noWrap?: boolean;
  paragraph?: boolean;
};

const Typography = ({
  children,
  component,
  variant,
  noWrap = false,
  paragraph = false,
}: TypographyProps) => {
  return (
    <MuiTypography
      component={component}
      variant={variant}
      noWrap={noWrap}
      paragraph={paragraph}
    >
      {children}
    </MuiTypography>
  );
};

export default React.memo(Typography);
