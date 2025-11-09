import { FastifyInstance } from "fastify/types/instance";

export class AnimalService {
  constructor(private app: FastifyInstance) {}

  async findAnimals() {
    return this.app.prisma.animal.findMany();
  }
}
