"use server";

import { db } from "@/lib/db";

export const getUsers = async () => {
  const users = await db.user.findMany({
    select:{
      name: true,
      image: true
    }
  });
  
  return { users: users };
};
