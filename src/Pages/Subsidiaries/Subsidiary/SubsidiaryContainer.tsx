import React from "react";
import { useParams } from "react-router";
import useSaveSubsidiary from "./command/useSaveSubsidiary";
import Subsidiary from "./Subsidiary";

type SubsidiaryParams = {
    id: string;
};

const SubsidiaryContainer = () => {
    const { id } = useParams<SubsidiaryParams>();
    const saveSubsidiaryMutation = useSaveSubsidiary();

    return (
        <Subsidiary
            subsidiary={{ id: id || "" , name: "", parentId: "" }} 
            mutation={saveSubsidiaryMutation}
        />
    );
};

export default React.memo(SubsidiaryContainer);