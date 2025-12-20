import { Prisma } from "@prisma/client";

export type AnimalsInclude = Prisma.AnimalInclude
export type AnimalsWithInclude<I extends AnimalsInclude | undefined = undefined> = Prisma.AnimalGetPayload<{
    include: I
}> 