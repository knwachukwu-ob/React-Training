import { styled } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "../../../Components";
import { GetTenantType } from "./queries/types";
import { useNavigate } from "react-router-dom";
import TENANTS_ENDPOINTS from "../tenantEndpoints";

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", 
    width: "25%",
});


type TenantProps = {
    tenant?: GetTenantType;
};

const Tenant = ({ tenant }: TenantProps) => {
    const navigate = useNavigate();
    
    const isValidTenant = tenant && typeof tenant === 'object' && !Array.isArray(tenant);
    
    const { register, reset, handleSubmit } = useForm<GetTenantType>({
        defaultValues: isValidTenant ? tenant : { id: 0 },
    });

    useEffect(() => {
        if (isValidTenant) {
            reset(tenant);
        }
    }, [reset, tenant, isValidTenant]);

    const onSubmit = useCallback(
        (data: GetTenantType) => {
            navigate(`/${TENANTS_ENDPOINTS.TENANTS}/${data.id}`);
        },
        [navigate],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBox>
                <TextField {...register("id")} label="Tenant Id" />
                <Button type="submit">
                    Submit
                </Button>
          </StyledBox>
        </form>
    );
};

export default React.memo(Tenant);