import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main
      className={cn(
        "flex h-full flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-purple-700",
        fontSans.className
      )}
    >
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white font-bold drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-purple-200 text-base pb-6">Just testing next auth.js</p>
        <LoginButton>
          <Button variant={"secondary"} size="default">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
