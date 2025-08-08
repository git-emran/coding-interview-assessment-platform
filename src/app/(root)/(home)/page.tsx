"use client"

import { useUserRole } from "@/hooks/useUserRole";
import { SignedOut, SignInButton, SignedIn, UserButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
    const { isInterviewer, isCandidate } = useUserRole()

    return (
        <div className="container max-w-7xl mx-auto px-6">

            {/* WELCOME SECTION */}
            <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Welcome back!
                </h1>
                <p className="text-muted-foreground mt-2">
                    {isInterviewer
                        ? "Manage your interviews and review candidates effectively"
                        : "Access your upcoming interviews and preparations"}
                </p>
            </div>

        </div>
    )


}
