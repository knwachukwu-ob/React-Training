import { useMutation } from "@tanstack/react-query";
import withToast from "../../../../Providers/react-toastify/withToast";
import SUBSIDIARY_ENDPOINTS from "../../subsidiaryEndpoints";
import { SaveSubsidiaryType } from "./types";

const saveSubsidiary = (subsidiary: Omit<SaveSubsidiaryType, 'id'> & { id: string }) => {
    const { id, ...updateData } = subsidiary;
    const apiurl = import.meta.env.VITE_API_URL;
    
    return withToast(
        fetch(`${apiurl}/${SUBSIDIARY_ENDPOINTS.SUBSIDIARY}/${id}`, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData),
            
        })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error("Failed to update subsidiary");
            }
            return response.json() as Promise<SaveSubsidiaryType>;
        })
    );
};

const useSaveSubsidiary = () => {
    return useMutation({
        mutationFn: (subsidiary: Omit<SaveSubsidiaryType, 'id'> & { id: string }) =>
            saveSubsidiary(subsidiary),
    });
};

export default useSaveSubsidiary;