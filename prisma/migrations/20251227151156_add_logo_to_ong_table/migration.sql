/*
  Warnings:

  - A unique constraint covering the columns `[logo_photo_id]` on the table `ongs` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ongs" ADD COLUMN     "logo_photo_id" BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "ongs_logo_photo_id_key" ON "ongs"("logo_photo_id");

-- AddForeignKey
ALTER TABLE "ongs" ADD CONSTRAINT "ongs_logo_photo_id_fkey" FOREIGN KEY ("logo_photo_id") REFERENCES "photos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
