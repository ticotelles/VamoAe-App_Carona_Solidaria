/*
  Warnings:

  - Added the required column `userId` to the `Rides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rides" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rides" ADD CONSTRAINT "Rides_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
