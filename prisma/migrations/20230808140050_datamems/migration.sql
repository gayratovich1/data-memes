-- CreateTable
CREATE TABLE "Multipart" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Multipart_pkey" PRIMARY KEY ("id")
);
