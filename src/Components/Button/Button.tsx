import MuiButton from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

type ButtonProps = {
  type?: 'reset' | 'button' | 'submit';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  skeleton?: boolean;
};

const Button = ({
  type,
  children,
  onClick,
  disabled,
  skeleton,
}: ButtonProps) => {
  return (
    <>
      {skeleton && <Skeleton variant='rectangular' sx={{ padding: '1rem' }} />}
      {!skeleton && (
        <MuiButton type={type} onClick={onClick} disabled={disabled}>
          {children}
        </MuiButton>
      )}
    </>
  );
};

export default React.memo(Button);
