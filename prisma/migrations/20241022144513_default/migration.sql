/*
  Warnings:

  - The `serverName` column on the `links` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "links" DROP COLUMN "serverName",
ADD COLUMN     "serverName" TEXT[] DEFAULT ARRAY[]::TEXT[];
