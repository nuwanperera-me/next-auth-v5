"use client";

import { getUsers } from "@/actions/get-users";
import { useState, useTransition, useEffect } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Loader2 } from "lucide-react";

type userProps = { name: string; image: string };

export const UsersCard = () => {
  const [users, setUsers] = useState<any>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getUsers().then((data) => {
        setUsers(data.users);
      });
    });
  }, []);
  return (
    <Card className="w-96">
      <CardHeader className="text-2xl text-center font-semibold">
        🙇🏼‍♂️ Users
      </CardHeader>
      <CardContent className="w-full h-72 overflow-scroll flex flex-col gap-2">
        {isPending && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Loader2 className="text-primary animate-spin" />
          </div>
        )}
        {!isPending &&
          users.map((user: userProps, id: number) => {
            return (
              <div
                key={id}
                className="w-full p-4 flex justify-between items-center bg-secondary text-secondary-foreground rounded-md shadow-sm border"
              >
                <Avatar>
                  <AvatarImage src={user?.image || ""}></AvatarImage>
                  <AvatarFallback className="bg-zinc-400"></AvatarFallback>
                </Avatar>
                <p className="font-medium text-sm">{user.name}</p>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
};
