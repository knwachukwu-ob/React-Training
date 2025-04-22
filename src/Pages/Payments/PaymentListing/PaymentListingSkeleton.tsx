import React from 'react';
import { Skeleton } from '@mui/material';

const PaymentListingSkeleton = () => {
  return (
      <Skeleton variant="rectangular" height="100%" />
   
  );
};

export default React.memo(PaymentListingSkeleton);