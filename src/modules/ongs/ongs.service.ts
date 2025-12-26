import { FastifyInstance } from "fastify/types/instance";

export class OngService {
  constructor(private app: FastifyInstance) {}

  async findUsers() {
    return this.app.prisma.user.findMany();
  }
}
