import React, { useEffect } from 'react';
import useGetTenantsListing from './queries/useGetTenantsListing';
import TenantListing from './TenantsListing';
import TenantListingSkeleton from './TenantListingSkeleton';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';

type GetTenantsListingParams = {
  id: string;
};

const TenantListingContainer = () => {
  const { id } = useParams<GetTenantsListingParams>();
  const numericId = id ? parseInt(id, 10) : 0;

  const { data, isLoading, refetch, error } = useGetTenantsListing({
    id: numericId,
  });

  useEffect(() => {
    refetch();
  }, [numericId, refetch]);

  if (isLoading ) {
    return <TenantListingSkeleton />;
  }

  if (error) {
    return <Typography color="error">Error: Could not load tenant data.</Typography>;
  }

  return data ? <TenantListing tenantListings={data} /> : null;
};

export default React.memo(TenantListingContainer);