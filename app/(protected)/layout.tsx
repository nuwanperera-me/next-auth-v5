import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { NavBar } from "./_components/navbar";
import { Metadata } from "next";

const title = "next auth v5 guide";
const creator = "@nuwanperera-me";
const description = "Next auth v5 guide...";

export const metadata: Metadata = {
  title: title,
  description: description,
  creator: creator,
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: creator,
  },
  metadataBase: new URL("https://next-auth-v5-mu.vercel.app/"),
};

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
