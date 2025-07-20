import axiosInstance from "@/config/api/axios";
import { ApiRoutes } from "@/config/api/routes";
import { NewWaitlistUser } from "../interfaces/waitlist.interface";


export const addToWaitlist = async ({ email }: NewWaitlistUser): Promise<any> => {
    try {
        const response = await axiosInstance.post(ApiRoutes.auth.email.waitlist, {
            email,
        });

        return response.data;
    } catch (error) {
        throw new Error("Failed to add to waitlist. Please try again.");
    }
};