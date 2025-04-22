import { useMutation } from "@tanstack/react-query";
import withToast from "../../../../Providers/react-toastify/withToast";
import PROPERTY_ENDPOINTS from "../../propertyEndpoints";
import { SavePropertyType } from "../commands/types";

const saveProperty = (property: Omit<SavePropertyType, 'id'> & { id: number }) => {
    const { id, ...updateData } = property;
    const apiurl = import.meta.env.VITE_API_URL;
    return withToast(
        fetch(`${apiurl}/${PROPERTY_ENDPOINTS.PROPERTIES}/${id}`, {
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
                throw new Error("Failed to update property");
            }
            return response.json() as Promise<SavePropertyType>;
        })
    );
};

const useSaveProperty = () => {
    return useMutation({
        mutationFn: (property: Omit<SavePropertyType, 'id'> & { id: number }) =>
            saveProperty(property),
    });
};

export default useSaveProperty;