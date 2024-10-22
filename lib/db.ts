import { PrismaClient } from "@prisma/client";

// Extend the globalThis interface to include the prisma property
declare global {
  // No need for namespaces, directly extend globalThis
  interface Global {
    prisma: PrismaClient | undefined;
  }

  var prisma: PrismaClient | undefined; // Use let or const as needed
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;