import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {

    return (
        <div className="m-5">
            <SignInButton>
                <Button>
                    Wagamama
                </Button>
            </SignInButton>
        </div>
    )


}
