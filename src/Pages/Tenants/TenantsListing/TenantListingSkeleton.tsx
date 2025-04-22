import React from "react";
import { Skeleton } from "@mui/material";

const TenantListingSkeleton = () => {
  return <Skeleton variant='rectangular' height={825} />;
};

export default  React.memo(TenantListingSkeleton);