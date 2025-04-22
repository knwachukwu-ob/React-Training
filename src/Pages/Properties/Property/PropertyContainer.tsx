import React from "react";
import { useParams } from "react-router";
import useGetProperty from "./queries/useGetProperty";
import Property from "./Property";
import PropertySkeleton from "./PropertySkeleton";
import useSaveProperty from "./commands/useSaveProperty";

type PropertyParams = {
  id: string;
};

const PropertyContainer = () => {
  const { id } = useParams<PropertyParams>();
  const { data, isLoading } = useGetProperty( id || "0");
  const mutation = useSaveProperty();

  const numericId = parseInt(id || "0", 10);

  const property = Array.isArray(data)
    ? data.find((p) => p.id == numericId)
    : data;

  return (
    <>
      {(isLoading || !property) && <PropertySkeleton />}
      {property && <Property property={property} mutation={mutation} />}
    </>
  );
};

export default React.memo(PropertyContainer);