import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExtendedUser } from "@/auth";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[480px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4 ">
        <div className="flex justify-between border border-border p-3 rounded-sm shadow-sm text-sm">
          <p className="font-medium">
            ID
          </p>
          <p className="truncate text-xs max-w-[200px] font-mono bg-slate-100 p-1 rounded-md">{user?.id}</p>
        </div>
        <div className="flex justify-between border border-border p-3 rounded-sm shadow-sm text-sm">
          <p className="font-medium">
            Name
          </p>
          <p className="truncate text-xs max-w-[200px] font-mono bg-slate-100 p-1 rounded-md">{user?.name}</p>
        </div>
        <div className="flex justify-between border border-border p-3 rounded-sm shadow-sm text-sm">
          <p className="font-medium">
            Email
          </p>
          <p className="truncate text-xs max-w-[200px] font-mono bg-slate-100 p-1 rounded-md">{user?.email}</p>
        </div>
        <div className="flex justify-between border border-border p-3 rounded-sm shadow-sm text-sm">
          <p className="font-medium">
            Role
          </p>
          <p className="truncate text-xs max-w-[200px] font-mono bg-slate-100 p-1 rounded-md">{user?.role}</p>
        </div>
        <div className="flex justify-between border border-border p-3 rounded-sm shadow-sm text-sm">
          <p className="font-medium">
            Two Factor Authentication
          </p>
          <Badge className="rounded-sm" variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>{user?.isTwoFactorEnabled ? "ON" : "OFF"}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
