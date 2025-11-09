// src/plugins/prisma.ts

import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

// Extende a interface do Fastify para incluir o Prisma Client
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(
  async (fastify: FastifyInstance) => {
    const prisma = new PrismaClient();

    await prisma.$connect();

    fastify.decorate("prisma", prisma);

    fastify.addHook("onClose", async (server) => {
      server.log.info("Desconectando o Prisma Client...");
      await server.prisma.$disconnect();
    });
  }
);

export default prismaPlugin;
