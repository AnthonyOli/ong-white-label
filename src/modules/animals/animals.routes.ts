import { FastifyInstance } from "fastify";
import { AnimalController } from "./animals.controller";

export default async function animalRoutes(app: FastifyInstance) {
  const controller = new AnimalController(app);

  app.get("/", (req, reply) => controller.findAll(req, reply));
  app.post("/", (req, reply) => controller.create(req, reply));
}
