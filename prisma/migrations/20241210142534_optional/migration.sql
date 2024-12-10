/*
  Warnings:

  - You are about to drop the `Featured` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Featured" DROP CONSTRAINT "Featured_moviesId_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_sub_categoriesId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profileImage" DROP NOT NULL;

-- DropTable
DROP TABLE "Featured";

-- DropTable
DROP TABLE "SubCategory";

-- CreateTable
CREATE TABLE "subCategories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features" (
    "id" TEXT NOT NULL,
    "moviesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_sub_categoriesId_fkey" FOREIGN KEY ("sub_categoriesId") REFERENCES "subCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "features" ADD CONSTRAINT "features_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
