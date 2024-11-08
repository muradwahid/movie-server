/*
  Warnings:

  - The `userId` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "links" ALTER COLUMN "quality" DROP NOT NULL,
ALTER COLUMN "quality" SET DATA TYPE TEXT,
ALTER COLUMN "serverName" DROP NOT NULL,
ALTER COLUMN "serverName" DROP DEFAULT,
ALTER COLUMN "serverName" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userId",
ADD COLUMN     "userId" SERIAL NOT NULL;
