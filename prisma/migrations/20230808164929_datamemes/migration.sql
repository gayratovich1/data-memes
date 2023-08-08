/*
  Warnings:

  - You are about to drop the column `multipartId` on the `Multipart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Multipart" DROP CONSTRAINT "Multipart_multipartId_fkey";

-- AlterTable
ALTER TABLE "Multipart" DROP COLUMN "multipartId";
