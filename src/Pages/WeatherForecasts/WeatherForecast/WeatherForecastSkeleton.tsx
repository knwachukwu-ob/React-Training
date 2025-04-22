import styled from '@emotion/styled';
import React from 'react';
import { Box, Button, TextField } from '../../../Components';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const WeatherForecastSkeleton = () => {
  return (
    <StyledBox>
      <TextField skeleton />
      <TextField skeleton />
      <TextField skeleton />
      <TextField skeleton />
      <TextField skeleton />
      <TextField skeleton />
      <Button skeleton>Submit</Button>
    </StyledBox>
  );
};

export default React.memo(WeatherForecastSkeleton);
