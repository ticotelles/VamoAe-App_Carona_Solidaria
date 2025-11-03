/*
  Warnings:

  - You are about to drop the `CreateRequestRide` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreateRide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."CreateRequestRide";

-- DropTable
DROP TABLE "public"."CreateRide";

-- CreateTable
CREATE TABLE "Rides" (
    "id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "value" INTEGER,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "isRideRequest" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rides_pkey" PRIMARY KEY ("id")
);
