import { PrismaClient } from "@prisma/client";

// Extend the globalThis interface to include the prisma property
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }

  // For globalThis specifically
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;