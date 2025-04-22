import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "../../../Components";
import { SaveSubsidiaryType } from "./command/types";
import { UseMutationResult } from "@tanstack/react-query";

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", 
    width: "25%",
});



type SubsidiaryProps = {
    subsidiary: SaveSubsidiaryType;
    mutation?: UseMutationResult<
        SaveSubsidiaryType,
        unknown,
        SaveSubsidiaryType,
        unknown
    >;
};

const Subsidiary = ({ mutation }: SubsidiaryProps) => {
    const { register, reset, handleSubmit } = useForm<SaveSubsidiaryType>({
        defaultValues: {
            id:  "", 
            name: "",
            parentId: "",
        },
    });

    const onSubmit = useCallback(
        (data: SaveSubsidiaryType) => {

            const {id, ...updateData} = data
            mutation?.mutate({ ...updateData, id } as Omit<SaveSubsidiaryType, 'id'> & { id: string }, {
                onSuccess: () => {
                    reset(data);
                },
            });
        },
        [mutation, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBox>
                <TextField
                    {...register("id")}
                    label="Subsidiary Id"
                />
                <TextField {...register("name")} label="Subsidiary Name" />
                <TextField {...register("parentId")} label="Parent Id" />
                <Button  type="submit" disabled={mutation?.isPending} 
                
                >
                    Update Subsidiary
                </Button>
                
            </StyledBox>
        </form>
    );
};

export default React.memo(Subsidiary);