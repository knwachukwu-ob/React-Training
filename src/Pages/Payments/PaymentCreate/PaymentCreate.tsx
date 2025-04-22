import { styled } from "@mui/material";
import React, { useCallback } from "react"; 
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "../../../Components";
import { CreatePaymentType } from "./commands/types";
import { UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "25%",
});

type PaymentProps = {
    payment: CreatePaymentType;
    mutation?: UseMutationResult<CreatePaymentType, unknown, CreatePaymentType, unknown>;
};

const PaymentCreate = ({ mutation }: PaymentProps) => {
    const navigate = useNavigate();  
    const { register, reset, handleSubmit } = useForm<CreatePaymentType>({
        defaultValues: {
            amount: 0,
            transactionDate: new Date().toISOString(),
            leaseIds: [],
        },
    });

    const onSubmit = useCallback(
        (data: CreatePaymentType) => {
            mutation?.mutate( data ,  {
                onSuccess: () => {
                    reset(data);
                    navigate("/payments");
                },
            });
        },
        [mutation, reset],
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledBox>
                <TextField {...register("amount")} label="Amount"  />
                <TextField {...register("leaseIds")} label="Lease IDs" />
                <Button type="submit" disabled={mutation?.isPending} >Create Payment</Button>
            </StyledBox>
        </form>
    );
};

export default React.memo(PaymentCreate);