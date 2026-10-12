-- CreateEnum
CREATE TYPE "Personality" AS ENUM ('FRIENDLY', 'SHY', 'PLAYFUL', 'CALM', 'ENERGETIC', 'CURIOUS', 'INDEPENDENT', 'AFFECTIONATE', 'PROTECTIVE', 'AGGRESSIVE');

-- CreateEnum
CREATE TYPE "Specie" AS ENUM ('DOG', 'CAT', 'RABBIT', 'HORSE', 'GUINEA_PIG', 'HAMSTER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "tenant" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animals" (
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

    CONSTRAINT "Animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FosterHome" (
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

    CONSTRAINT "FosterHome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_slug_key" ON "tenant"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE INDEX "users_tenantId_idx" ON "users"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "users_tenantId_email_key" ON "users"("tenantId", "email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animals" ADD CONSTRAINT "Animals_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animals" ADD CONSTRAINT "Animals_foster_home_id_fkey" FOREIGN KEY ("foster_home_id") REFERENCES "FosterHome"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FosterHome" ADD CONSTRAINT "FosterHome_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FosterHome" ADD CONSTRAINT "FosterHome_responsible_id_fkey" FOREIGN KEY ("responsible_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
