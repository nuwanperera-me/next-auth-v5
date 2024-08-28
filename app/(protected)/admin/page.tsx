"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
// import { useCurrentRole } from "@/hooks/use-current-role";
// import { currentRole } from "@/lib/auth";

export default function AdminPage() {
  // for client component
  // const role = useCurrentRole();
  // for  server component
  // const role = currentRole();

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        console.log("OKAYY");
        toast.success("Allowed Api Route!")
      } else {
        console.error("FORBIDDEN");
        toast.error("Forbidden route!")

      }
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.success) {
        console.log(data.success);
        toast.success(data.success)
      }
      if (data.error) {
        console.error(data.error);
        toast.error(data.error)

      }
    })
  }

  return (
    <Card className="w-[480px]">
      <CardHeader>
        <p className="text-2xl text-center font-semibold">👨🏻‍💼 Admin Panel</p>
      </CardHeader>
      <CardContent className=" flex flex-col gap-2">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Yoow" />
        </RoleGate>
        <div className="flex justify-between items-center p-3">
          <p className="text-sm font-medium">Admin-only api route</p>
          <Button onClick={onApiRouteClick} size="sm">
            Click to test
          </Button>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-sm font-medium">Admin-only server actions</p>
          <Button onClick={onServerActionClick} size="sm">Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
