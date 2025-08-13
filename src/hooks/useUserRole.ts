import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { user } = useUser();

  const userData = useQuery(
    api.users.getUserByClerkId,
    (user?.id ? { clerkId: user.id } : "skip") as any,
  );

  const isLoading = userData === undefined || !user;

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};
