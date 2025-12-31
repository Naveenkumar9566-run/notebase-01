/*
  Warnings:

  - Made the column `inngestEvenId` on table `Execution` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Execution" ALTER COLUMN "inngestEvenId" SET NOT NULL;
