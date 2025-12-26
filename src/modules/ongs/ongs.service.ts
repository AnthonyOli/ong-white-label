import { FastifyInstance } from "fastify/types/instance";
import CreateOngDto from "./dtos/create-ong.dto";
import { Ong } from "@prisma/client";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import { OngIncludes, OngWithIncludes } from "./types/ong.types";

export class OngService {
  constructor(private app: FastifyInstance) { }

  async findOngById<I extends OngIncludes | undefined = undefined>(id: number, include: I): Promise<OngWithIncludes<I>> {
    return await this.app.prisma.ong.findUniqueOrThrow({
      where: {
        id
      },
      include
    }) as OngWithIncludes<I>
  }

  async findOngs() {
    return this.app.prisma.ong.findMany();
  }

  async create(obj: CreateOngDto): Promise<Ong> {
    try {
      const ongObj = plainToInstance(CreateOngDto, obj);
      await validateOrReject(ongObj);
      return await this.app.prisma.ong.create({ data: ongObj });
    } catch (e) {
      console.log(e)
      throw e;
    }
  }
}
