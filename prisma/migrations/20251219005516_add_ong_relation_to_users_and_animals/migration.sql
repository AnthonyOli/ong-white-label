/*
  Warnings:

  - Added the required column `ong_id` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ong_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "ong_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "ong_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
