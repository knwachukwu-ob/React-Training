import { useQuery }  from "@tanstack/react-query";
import QUERY_KEYS from "../../../../Providers/react-query/queryKeys";
import { GetPropertyType } from "./types";

const apiURL = import.meta.env.VITE_API_URL;

const getProperty = async (propertyId: string) => {
    const response = await fetch(`${apiURL}/Properties/${propertyId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode:'cors',
        credentials: 'include', 
    });

    if (!response.ok) {
        throw new Error('Failed to fetch property');
    }
    
    return response.json() as Promise<GetPropertyType>;
}

const useGetProperty = (propertyId: string) => {
    const { data, isLoading, error } = useQuery({
      queryKey: [QUERY_KEYS.PROPERTY, propertyId],
      queryFn: () => getProperty(propertyId),
      retry: false, 
    });
  
    return { data, isLoading, error };
  };

export default useGetProperty;