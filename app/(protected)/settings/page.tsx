import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function SettingsPage() {

  const session = await auth();

  return (
    <div>
      <h1>Settings</h1>
      <p>Welcome, {JSON.stringify(session)}</p>
      <form action={async () => {
        "use server";

        await signOut({redirect: false});
        redirect("/auth/login");
      }}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}