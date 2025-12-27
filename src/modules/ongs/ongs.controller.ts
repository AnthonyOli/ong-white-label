import { Ong } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import CreateOngDto from "./dtos/create-ong.dto";
import { OngService } from "./ongs.service";

export class OngController {
  private service: OngService;

  constructor(app: FastifyInstance) {
    this.service = new OngService(app);
  }

  async findById(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = req.params as { id: string }
      return this.service.findOngById(Number(id))
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async create(req: FastifyRequest, reply: FastifyReply): Promise<Ong> {
    const obj: CreateOngDto = req.body as CreateOngDto
    return await this.service.create(obj)
  }

  async findAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const ongs = await this.service.findOngs();
      return reply.send(ongs);
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
