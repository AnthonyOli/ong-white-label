-- Enable PostgreSQL extensions

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CreateEnum

CREATE TYPE "specie_enum" AS ENUM ('DOG', 'CAT', 'BIRD', 'OTHER');
-- CreateEnum

CREATE TYPE "photo_type_enum" AS ENUM ('THUMB', 'GALLERY');
-- CreateTable

CREATE TABLE "animals" ( "id" UUID NOT NULL DEFAULT uuid_generate_v1(), "name" TEXT NOT NULL, "birth_date" TIMESTAMP(3), "details" TEXT, "specie" "specie_enum" NOT NULL, "specific_specie" TEXT, CONSTRAINT "animals_pkey" PRIMARY KEY ("id") );
-- CreateTable

CREATE TABLE "photos" ( "id" BIGSERIAL NOT NULL, "name" TEXT NOT NULL, "type" "photo_type_enum" NOT NULL, "animal_id" UUID NOT NULL, CONSTRAINT "photos_pkey" PRIMARY KEY ("id") );
-- CreateIndex

CREATE UNIQUE INDEX "photos_id_key"
ON "photos"("id");
-- AddForeignKey

ALTER TABLE "photos" ADD CONSTRAINT "photos_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id")
ON
DELETE RESTRICT
ON UPDATE CASCADE;