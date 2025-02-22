/*
  Warnings:

  - Changed the type of `category` on the `Service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('MARKETING', 'DEVELOPMENT', 'DESIGN', 'CONSULTING', 'OTHER');

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_agencyId_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "category",
ADD COLUMN     "category" "ServiceCategory" NOT NULL;

-- CreateIndex
CREATE INDEX "Service_agencyId_idx" ON "Service"("agencyId");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
