"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function ClientPage() {
  const user = useCurrentUser();
  return (
    <div className="">
      <UserInfo user={user} label="💁🏻‍♂️ Client component" />
    </div>
  );
}
