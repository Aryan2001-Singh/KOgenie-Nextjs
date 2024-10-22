import { PrismaClient } from "@prisma/client";

// Extend the globalThis interface to include the prisma property
declare global {
  // Declare prisma as a constant in globalThis, but it should not be reassigned.
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}