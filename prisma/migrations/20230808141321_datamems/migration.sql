/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `Multipart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `Multipart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Multipart" ADD COLUMN     "nickname" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Multipart_nickname_key" ON "Multipart"("nickname");
