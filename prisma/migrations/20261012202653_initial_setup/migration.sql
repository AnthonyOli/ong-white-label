/*
  Warnings:

  - You are about to drop the `Animals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FosterHome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Animals" DROP CONSTRAINT "Animals_foster_home_id_fkey";

-- DropForeignKey
ALTER TABLE "Animals" DROP CONSTRAINT "Animals_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "FosterHome" DROP CONSTRAINT "FosterHome_responsible_id_fkey";

-- DropForeignKey
ALTER TABLE "FosterHome" DROP CONSTRAINT "FosterHome_tenant_id_fkey";

-- DropTable
DROP TABLE "Animals";

-- DropTable
DROP TABLE "FosterHome";

-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "specie" "Specie" NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "foster_home_id" TEXT,
    "birth_date" TIMESTAMP(3),
    "personality" "Personality"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foster_home" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "stree" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "responsible_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foster_home_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_foster_home_id_fkey" FOREIGN KEY ("foster_home_id") REFERENCES "foster_home"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foster_home" ADD CONSTRAINT "foster_home_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foster_home" ADD CONSTRAINT "foster_home_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
