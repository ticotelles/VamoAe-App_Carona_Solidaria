/*
  Warnings:

  - You are about to drop the `Ride` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Ride";

-- CreateTable
CREATE TABLE "CreateRide" (
    "id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "isRideRequest" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CreateRide_pkey" PRIMARY KEY ("id")
);
