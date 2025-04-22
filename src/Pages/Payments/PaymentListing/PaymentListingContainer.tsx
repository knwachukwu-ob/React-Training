import React from 'react';
import useGetPaymentsListing from './queries/useGetPaymentsListing';
import PaymentListing from './PaymentListing';
import PaymentListingSkeleton from './PaymentListingSkeleton';

const PaymentListingContainer = () => {
  const { data, isLoading } = useGetPaymentsListing();

  return (
    <>
      {(isLoading || !data) && <PaymentListingSkeleton />}
      {data && <PaymentListing payments={data} />}
    </>
  );
};

export default React.memo(PaymentListingContainer);