import React from "react";
import { useParams } from "react-router";
import useGetTenant from "./queries/useGetTenant";
import Tenant from "./Tenant";
import TenantSkeleton from "./Tenant";

type TenantParams = { 
  id: string 
};

const TenantContainer = () => {
  const { id } = useParams<TenantParams>();

  const { data, isLoading, isFetching } = useGetTenant({ 
    id: parseInt(id || ""),
  });

  if (isLoading) {
    return <TenantSkeleton />;
  }

  
  return (
      <>
        {(isLoading || isFetching) && <TenantSkeleton />}
        {!isLoading && !isFetching && (
          <Tenant tenant={data}  />
        )}
      </>
    );
};

export default React.memo(TenantContainer);