import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./users.service";

export class UserController {
  private service: UserService;

  constructor(private app: FastifyInstance) {
    this.service = new UserService(app);
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const animals = await this.service.findUsers();
      return reply.send(animals);
    } catch (err) {
      this.app.log.error(err);
      return reply.status(500).send({ error: "Erro ao buscar animais" });
    }
  }
}
