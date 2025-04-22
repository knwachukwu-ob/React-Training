import React, { useEffect } from "react";
import { GetTenantsListingType } from './queries/types';
import { styled } from "@mui/material";
import { Box, Button, TextField } from "../../../Components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import TENANTS_ENDPOINTS from "../tenantEndpoints";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});


type TenantListingProps = {
  tenantListings: GetTenantsListingType;
};

const TenantsListing = ({
  tenantListings,
}: TenantListingProps) => {

  const navigate = useNavigate()  

  const { register, reset } = useForm<GetTenantsListingType>({
    defaultValues: tenantListings,
  });

  useEffect(() => {
    reset(tenantListings);
  }, [tenantListings, reset]);

  const handleBackClick = () => {
    navigate(`/${TENANTS_ENDPOINTS.TENANTS}`);
  };

  return (
    <StyledBox>
            <TextField
              {...register("tenantId")}
              label="Tenant Id"
              disabled
            />
            <TextField
              {...register("tenantName")}
              label="Tenant Name"
              disabled
            />
            <TextField
              {...register("status")}
              label="Tenant Status"
              disabled
            />
            <TextField
              {...register("subsidiaryName")}
              label="Subsidiary Name"
              disabled
              />
            <TextField
              {...register("parentName")}
              label="Parent Name"
              disabled
            />

          <Button
          type="submit"
          onClick={handleBackClick}>
          Back
        </Button>
    </StyledBox>
    
  );
};

export default React.memo(TenantsListing);