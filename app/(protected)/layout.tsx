import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { NavBar } from "./_components/navbar";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="flex flex-col min-h-screen max-w-screen-lg items-center gap-4 mx-auto">
        <NavBar />
        {children}
      </div>
    </SessionProvider>
  );
}
