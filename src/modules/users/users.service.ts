import { FastifyInstance } from "fastify/types/instance";

export class UserService {
  constructor(private app: FastifyInstance) {}

  async findUsers() {
    return this.app.prisma.animal.findMany();
  }
}
