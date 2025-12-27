import { FastifyInstance } from "fastify";
import { OngController } from "./ongs.controller";

export default async function ongRoutes(app: FastifyInstance) {
  const controller = new OngController(app);

  app.get("/", (req, reply) => controller.findAll(req, reply));
  app.get("/:id", (req, reply) => controller.findById(req, reply))
  app.post("/", (req, reply) => controller.create(req, reply))
}
