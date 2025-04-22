import { Skeleton } from '@mui/material';
import React from 'react';

const WeatherForecastListingSkeleton = () => {
  return <Skeleton variant='rectangular' height={825} />;
};

export default React.memo(WeatherForecastListingSkeleton);
