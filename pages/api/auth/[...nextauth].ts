import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "prisma/prisma";

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		// ...add more providers here
	],
	adapter: PrismaAdapter(prisma),
	database: process.env.DATABASE_URL,
};
export default NextAuth(authOptions);
