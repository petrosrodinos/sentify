import { useQuery } from "@tanstack/react-query";
import { getAlerts } from "../services/alerts.service";

export const useAlerts = () => {
    return useQuery({
        queryKey: ["alerts"],
        queryFn: () => getAlerts({ limit: 3 }),
    });
};
