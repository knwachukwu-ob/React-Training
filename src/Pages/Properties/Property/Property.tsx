import React, { useCallback, useEffect } from "react";
import { GetPropertyType } from './queries/types';
import { styled } from "@mui/material";
import { Box, Button, TextField } from "../../../Components";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SavePropertyType } from "./commands/types";
import { UseMutationResult, useQueryClient } from "@tanstack/react-query";

const StyledBox = styled(Box)({
  display: "flex", 
    flexDirection: "column",
    gap: "1rem",
    width: "30%",
});

type PropertyProps = {
    property: GetPropertyType;
    mutation?: UseMutationResult<any, Error, SavePropertyType, unknown>;

    };

const Property = ({
    property, mutation
}: PropertyProps) => {

    const navigate = useNavigate();  
    const queryClient = useQueryClient();

    const { register, reset, control, handleSubmit } = useForm<GetPropertyType>({
        defaultValues: property,
    });

    useEffect(() => {
        reset(property);
    }, [property, reset]);

    const handleBackClick = () => {
        navigate('/properties');
    };

    const { fields } = useFieldArray({
        control,
        name: "suites", 
      });

    const handleSaveClick = useCallback(
            (data: GetPropertyType) => {
              if (!mutation) return;
        
              const saveData: SavePropertyType = {
                id: data.id,
                name: data.name,
              };
        
              mutation.mutate(saveData, {
                onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["properties"] });
                  navigate("/properties");
                }
              });
            },
            [mutation, queryClient]
          );


    return (
        <StyledBox>
            <TextField
                {...register("id")}
                label="Property Id"
                disabled
            />
            <TextField
                {...register("name")}
                label="Property Name"
                
            />
            
            {fields.map((field, index) => (
                      <React.Fragment key={field.id}>
                        <TextField
                          {...register(`suites.${index}.id` as const)}
                          label={`Suite Id`}
                          disabled
                        />
                        <TextField
                          {...register(`suites.${index}.number` as const)}
                          label={`Suite Number ${index + 1}`}
                          disabled
                        />

                        <TextField
                          {...register(`suites.${index}.squareFootage` as const)}
                          label={`Square Footage ${index + 1}`}
                          disabled
                        />
                      </React.Fragment>
                    ))}
            <Button onClick={handleSubmit(handleSaveClick)}>
                Update 
                
                </Button>

            <Button onClick={handleBackClick}>
                Back
            </Button>

            
    </StyledBox>
    );
}

export default React.memo(Property);