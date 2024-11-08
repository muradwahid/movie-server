/*
  Warnings:

  - You are about to drop the `trandings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "trandings" DROP CONSTRAINT "trandings_moviesId_fkey";

-- DropTable
DROP TABLE "trandings";

-- CreateTable
CREATE TABLE "trendings" (
    "id" TEXT NOT NULL,
    "moviesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trendings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trendings" ADD CONSTRAINT "trendings_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
