import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledAlert = styled(MuiAlert)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  cursor: 'pointer',
});

type AlertProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
};

const Alert = ({ onClick, children }: AlertProps) => {
  return (
    <StyledAlert variant='filled' severity='info' onClick={onClick}>
      {children}
    </StyledAlert>
  );
};

export default React.memo(Alert);
