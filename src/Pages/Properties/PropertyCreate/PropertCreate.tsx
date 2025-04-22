import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "../../../Components";
import { CreatePropertyType } from "./commands/types";
import { UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "25%",
});



type PropertyProps = {
    property: CreatePropertyType;
    mutation?: UseMutationResult<CreatePropertyType, unknown, CreatePropertyType, unknown>;
};

const propertyCreate = ({ mutation }: PropertyProps) => {

    const navigate = useNavigate();  
    const { register, reset, handleSubmit } = useForm<CreatePropertyType>({
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = useCallback(
        (data: CreatePropertyType) => {
            mutation?.mutate( data ,  {
                onSuccess: () => {
                    reset(data);
                    navigate("/properties");
                },
            });
        },
        [mutation, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBox>
                
                <TextField {...register("name")} label="Property Name" />
                <Button type="submit" disabled={mutation?.isPending} >Create Property</Button>
            </StyledBox>
        </form>
    );
};

export default React.memo(propertyCreate);