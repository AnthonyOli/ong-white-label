import { FastifyInstance } from "fastify";
import { UserController } from "./users.controller";

export default async function userRoutes(app: FastifyInstance) {
  const controller = new UserController(app);

  app.get("/", (req, reply) => controller.findAll(req, reply));
}
