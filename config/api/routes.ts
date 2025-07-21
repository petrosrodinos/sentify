export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const ApiRoutes = {
    auth: {
        email: {
            waitlist: "/auth/email/waitlist",
        }
    },
    alerts: {
        get: "/alerts",
    }

}