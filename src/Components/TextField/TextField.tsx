import Skeleton from '@mui/material/Skeleton';
import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import React, { forwardRef } from 'react';

const width = 210;
const height = 50;

const StyledTextField = styled(MuiTextField)({
  width,
  height,
  margin: '1rem',
});

type TextFieldProps = {
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
  value?: unknown;
  skeleton?: boolean;
  disabled?: boolean;
};

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ label, onBlur, onChange, name, value, skeleton, disabled }, ref) => {
    return (
      <>
        {skeleton && (
          <Skeleton
            variant='rectangular'
            width={width}
            height={height}
            sx={{ margin: '1rem' }}
          />
        )}
        {!skeleton && (
          <StyledTextField
            ref={ref}
            label={label}
            onBlur={onBlur}
            onChange={onChange}
            name={name}
            variant='outlined'
            value={value}
            disabled={disabled}
          />
        )}
      </>
    );
  }
);

export default React.memo(TextField);
