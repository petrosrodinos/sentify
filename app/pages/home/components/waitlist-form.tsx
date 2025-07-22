"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useAddToWaitlist } from "@/features/waitlist/hooks/use-waitlist";

const waitlistSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function WaitlistForm({ title = "Join the Waitlist", description = "Get notified when we launch and receive exclusive early access.", className = "" }: WaitlistFormProps) {
  const { mutate: addToWaitlist, isPending } = useAddToWaitlist();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: WaitlistFormData) => {
    addToWaitlist(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className={`bg-blue-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 ${className}`}>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
        <Mail className="w-4 h-4 mr-2" />
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{description}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input type="email" placeholder="Enter your email address" {...register("email")} disabled={isPending} className={`w-full px-4 py-2 border rounded-md bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300 dark:border-slate-600 focus:ring-slate-500"}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <Button type="submit" disabled={isPending} className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
          {isPending ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">No spam, ever. Unsubscribe at any time.</p>
    </div>
  );
}
