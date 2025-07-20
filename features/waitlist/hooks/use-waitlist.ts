import { useMutation } from "@tanstack/react-query";
import { addToWaitlist } from "../services/waitlist.service";
import { toast } from "@/hooks/use-toast";
import { NewWaitlistUser } from "../interfaces/waitlist.interface";

export function useAddToWaitlist() {

    return useMutation({
        mutationFn: (data: NewWaitlistUser) => addToWaitlist(data),
        onSuccess: (data) => {
            if (data.code === 'WAITLIST_ALREADY_EXISTS') {
                toast({
                    title: "Already on waitlist",
                    description: "You are already on the waitlist",
                    duration: 2000,
                });
                return;
            }
            toast({
                title: "Added to waitlist",
                description: "You have been successfully added to the waitlist",
                duration: 2000,
            });
        },
        onError: (error) => {
            toast({
                title: "Could not add to waitlist",
                description: error.message,
                duration: 3000,
                variant: "error",
            });
        },
    });
} 