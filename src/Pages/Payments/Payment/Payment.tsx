import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { styled } from "@mui/material";
import { Box, Button, TextField } from "../../../Components";
import { SavePaymentsType } from "./commands/types";
import { GetPaymentsType } from "./queries/types";
import { UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

type PaymentProps = {
  payment?: GetPaymentsType;
  mutation?: UseMutationResult<any, Error, SavePaymentsType, unknown>;
};

const Payment = ({ payment }: PaymentProps) => {
  const navigate = useNavigate();

  const { register, reset, control } = useForm<GetPaymentsType>({
    defaultValues: payment,
  });

  const { fields } = useFieldArray({
    control,
    name: "leaseDto",
  });

  useEffect(() => {
    if (payment) {
      reset(payment);
    }
  }, [payment, reset]);

  

  const handleBackClick = () => {
    navigate("/payments");
  };

  return (
   
      <StyledBox>
        <TextField
          {...register("paymentId")}
          label="Id"
          disabled
        />
        <TextField
          {...register("transactionDate")}
          label="Transaction Date"
          disabled
        />
        <TextField
          {...register("amount")}
          label="Amount"
          disabled
        />

        {fields.length === 0 && (
          <Box>No leases available</Box>
        )}
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <TextField
              {...register(`leaseDto.${index}.leaseId` as const)}
              label={`Lease Id ${index + 1}`}
              disabled
            />
            <TextField
              {...register(`leaseDto.${index}.tenantName` as const)}
              label={`Tenant Name ${index + 1}`}
              disabled
            />
          </React.Fragment>
        ))}

        
        <Button onClick={handleBackClick}>
          Back
        </Button>
      </StyledBox>
  );
};

export default React.memo(Payment);