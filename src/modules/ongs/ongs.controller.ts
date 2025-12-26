import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { OngService } from "./ongs.service";

export class OngController {
  private service: OngService;

  constructor(private app: FastifyInstance) {
    this.service = new OngService(app);
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const ongs = await this.service.findOngs();
      return reply.send(ongs);
    } catch (err) {
      this.app.log.error(err);
      return reply.status(500).send({ error: "Erro ao buscar animais" });
    }
  }
}
