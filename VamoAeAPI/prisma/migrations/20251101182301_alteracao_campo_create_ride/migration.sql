/*
  Warnings:

  - Added the required column `whatsapp` to the `CreateRide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreateRide" ADD COLUMN     "whatsapp" TEXT NOT NULL;
