import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { checkout, polar, portal } from "@polar-sh/better-auth";
import { polarClient } from "./polar";



export const auth = betterAuth({
 database: prismaAdapter(prisma, {
  provider: "postgresql",
 }),
 emailAndPassword: {
  enabled: true,
  autoSignIn: true,
 },
 plugins: [
  polar({
    client: polarClient,
    createCustomerOnSignUp: true,
    use: [
      checkout({
         products: [
          {
            productId: "40924ea4-959d-4e87-a7ec-f0338468b296",
            slug: "Pro",
          }
        ],
        successUrl: process.env.POLAR_SUCCESS_URL,
        authenticatedUsersOnly: true,
      }),
      portal(),
    ],
  })
 ]
});

