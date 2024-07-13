import NextAuth from "next-auth";
import bcrypt from "bcryptjs";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter({
    prisma: db,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
            

          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return user;
          }
        }
        return null;
      },
      
    }),
  ],
  
});
