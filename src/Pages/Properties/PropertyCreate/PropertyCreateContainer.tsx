import React from "react";
import { useParams } from "react-router";
import useCreateProperty from "./commands/useCreateProperty";
import PropertyCreate from "./PropertCreate";

type PropertyCreateParams = {
    name: string;
};

const PropertyCreateContainer = () => {
    const { name } = useParams<PropertyCreateParams>();
    const createPropertyMutation = useCreateProperty();

    return (
        <PropertyCreate
            property={{ name: name || "" }}
            mutation={createPropertyMutation}
        />
    );
};

export default React.memo(PropertyCreateContainer);