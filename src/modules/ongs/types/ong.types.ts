import { Prisma } from "@prisma/client";

export type OngIncludes = Prisma.OngInclude
export type OngWithIncludes<I extends OngIncludes | undefined = undefined> = Prisma.OngGetPayload<{
    include: I
}>