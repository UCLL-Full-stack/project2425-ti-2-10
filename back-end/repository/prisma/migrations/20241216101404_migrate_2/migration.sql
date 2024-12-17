/*
  Warnings:

  - You are about to drop the column `managerId` on the `Ride` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_managerId_fkey";

-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "managerId";

-- CreateTable
CREATE TABLE "_ManagerToRide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ManagerToRide_AB_unique" ON "_ManagerToRide"("A", "B");

-- CreateIndex
CREATE INDEX "_ManagerToRide_B_index" ON "_ManagerToRide"("B");

-- AddForeignKey
ALTER TABLE "_ManagerToRide" ADD CONSTRAINT "_ManagerToRide_A_fkey" FOREIGN KEY ("A") REFERENCES "Manager"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManagerToRide" ADD CONSTRAINT "_ManagerToRide_B_fkey" FOREIGN KEY ("B") REFERENCES "Ride"("id") ON DELETE CASCADE ON UPDATE CASCADE;
