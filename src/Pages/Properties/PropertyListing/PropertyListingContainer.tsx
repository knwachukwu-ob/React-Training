import React from "react";
import useGetPropertyListings from "./queries/useGetPropertyListings";
import PropertyListing from "./PropertyListing";
import PropertyListingSkeleton from "./PropertyListingSkeleton";

const PropertyListingContainer = () => {
  const { data, isLoading } = useGetPropertyListings();

  return (
    <>
      {(isLoading || !data) && <PropertyListingSkeleton />}
      {data && <PropertyListing properties={data} />}
    </>
  );
}

export default React.memo(PropertyListingContainer);