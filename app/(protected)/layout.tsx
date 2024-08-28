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
      <div>
        <NavBar />
        {children}
      </div>
    </SessionProvider>
  );
}
