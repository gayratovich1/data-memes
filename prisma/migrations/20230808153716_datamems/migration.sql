/*
  Warnings:

  - You are about to drop the column `nickname` on the `Multipart` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Multipart_nickname_key";

-- AlterTable
ALTER TABLE "Multipart" DROP COLUMN "nickname";
