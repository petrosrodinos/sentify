import axiosInstance from "@/config/api/axios";
import { ApiRoutes } from "@/config/api/routes";
import { AlertQuery } from "../interfaces/alert.interface";


export const getAlerts = async (query: AlertQuery): Promise<any> => {
    try {
        const response = await axiosInstance.get(ApiRoutes.alerts.get, {
            params: query,
        });

        return response.data;
    } catch (error) {
        throw new Error("Failed to get alerts. Please try again.");
    }
};