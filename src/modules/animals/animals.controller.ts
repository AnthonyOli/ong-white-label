import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AnimalService } from "./animals.service";
import { CreateAnimal } from "./dtos/create-animal.dto";

export class AnimalController {
  private service: AnimalService;

  constructor(private app: FastifyInstance) {
    this.service = new AnimalService(app);
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const animals = await this.service.list();
      return reply.send(animals);
    } catch (err) {
      this.app.log.error(err);
      return reply.status(500).send({ error: "Erro ao buscar animais" });
    }
  }

  async create(req: FastifyRequest, reply: FastifyReply) {
    try {
      const animal = await this.service.create(req.body as CreateAnimal);
      return reply.send(animal);
    } catch (err) {
      this.app.log.error(err);
      return reply.status(500).send({ error: "Erro ao criar animal" });
    }
  }
}
