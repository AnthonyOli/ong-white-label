import { Animal } from "@prisma/client";
import { FastifyInstance } from "fastify/types/instance";
import { CreateAnimal } from "../../dtos/create-animal.dto";
import { AnimalsInclude, AnimalsWithInclude } from "../../types/animals.types";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";

export class AnimalService {
  constructor(private app: FastifyInstance) {}

  async list<T extends AnimalsInclude | undefined = undefined>(include?: T): Promise<Array<AnimalsWithInclude<T>>> {
    return await this.app.prisma.animal.findMany({
      include
    }) as Array<AnimalsWithInclude<T>>;
  }

  async getById<T extends AnimalsInclude | undefined = undefined>(id: string, include: T): Promise<AnimalsWithInclude<T>> {
    return await this.app.prisma.animal.findUniqueOrThrow({ where: { id }, include }) as AnimalsWithInclude<T>;
  }
  

  async create(obj: CreateAnimal): Promise<Animal> {
    try {
      const animalObj = plainToInstance(CreateAnimal, obj);
      await validateOrReject(animalObj);
      return await this.app.prisma.animal.create({ data: animalObj });
    } catch(e) {
      console.log(e)
      throw e;
    }
  }
 }
  