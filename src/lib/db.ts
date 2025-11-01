import { PrismaClient } from "@/generated/prisma/client"
 
// Type of method use in globalForPrisma and single commented the new prismaClient
//const prisma =  new PrismaClient();

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
  
 

export default prisma;