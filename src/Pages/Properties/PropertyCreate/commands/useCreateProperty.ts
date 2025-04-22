import { useMutation } from '@tanstack/react-query';
import withToast from '../../../../Providers/react-toastify/withToast';
import PROPERTY_ENDPOINTS from '../../propertyEndpoints';
import { CreatePropertyType } from './types';

const createProperty = (property: CreatePropertyType) => {
    const apiurl = import.meta.env.VITE_API_URL;

    return withToast(
        fetch(`${apiurl}/${PROPERTY_ENDPOINTS.PROPERTIES}`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(property),
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Failed to create property');
                }
                return response.json() as Promise<CreatePropertyType>;
            })
    );
};

const useCreateProperty = () => {
    return useMutation({
        mutationFn: (property: CreatePropertyType) => createProperty(property),
    });
};

export default useCreateProperty;