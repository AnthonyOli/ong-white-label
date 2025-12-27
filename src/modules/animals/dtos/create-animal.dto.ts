import { Specie } from "@prisma/client";

export class CreateAnimal {
    name: string
    birthDate: Date
    details: string
    specie: Specie
    specificSpecie: string
    ongId: number
}
