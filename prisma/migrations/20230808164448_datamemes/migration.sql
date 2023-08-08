/*
  Warnings:

  - Added the required column `multipartId` to the `Multipart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Multipart" ADD COLUMN     "multipartId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Multipart" ADD CONSTRAINT "Multipart_multipartId_fkey" FOREIGN KEY ("multipartId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
