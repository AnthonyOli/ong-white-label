import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AnimalService } from "./animals.service";

export class AnimalController {
  private service: AnimalService;

  constructor(private app: FastifyInstance) {
    this.service = new AnimalService(app);
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const animals = await this.service.findAnimals();
      return reply.send(animals);
    } catch (err) {
      this.app.log.error(err);
      return reply.status(500).send({ error: "Erro ao buscar animais" });
    }
  }
}
