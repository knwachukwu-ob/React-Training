import React from "react";
import { Skeleton } from "@mui/material";

const PropertyListingSkeleton = () => {
  return (
    <Skeleton variant="rectangular" height="100%" />
       
  );
};

export default React.memo(PropertyListingSkeleton);