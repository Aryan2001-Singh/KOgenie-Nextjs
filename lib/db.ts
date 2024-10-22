import { PrismaClient } from "@prisma/client";

declare global {
  interface Global {
    prisma: PrismaClient | undefined;
  }
}

// Add type safety by casting through unknown first
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;