import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../../../Providers/react-query/queryKeys";
import TENANTS_ENDPOINTS from "../../tenantEndpoints";
import { GetTenantType } from "../../Tenant/queries/types";
import apiInstance from "../../../../Providers/api/apiInstance";

type GetTenantProps = {
    id: number;
};

const getTenants = ({ id }: GetTenantProps) => {
  return apiInstance
    .get<GetTenantType>(
      `${TENANTS_ENDPOINTS.TENANTS}/${id}`)
    .then((response) => response.data);
};

type UseGetTenantProps = {
  id: number;
};

const useGetTenant = ({ id }: UseGetTenantProps) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.TENANTS],
    queryFn: () => getTenants({ id }),
  });

  return { data, isLoading, isFetching };
};

export default useGetTenant;