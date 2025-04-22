import styled from '@emotion/styled';
import React from 'react';
import { Box, Button, TextField } from '../../../Components';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const PropertyCreateSkeleton = () => {
  return (
    <StyledBox> 
        <TextField skeleton />
        <Button skeleton >Create</Button>
    </StyledBox>
    );
};

export default React.memo(PropertyCreateSkeleton);