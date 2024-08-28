"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function SettingsPage() {
  const user = useCurrentUser()

  const onClick = () => {
    logout();
  };

  return (
    <div className="max-w-screen-lg">
      <h1>Settings</h1>
      <p>Welcome, {JSON.stringify(user)}</p>
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
}
