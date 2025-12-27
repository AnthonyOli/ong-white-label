import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync, FastifyServerOptions } from "fastify";
import { join } from "node:path";
import animalRoutes from "./modules/animals/animals.routes";
import userRoutes from "./modules/users/users.routes";
import ongRoutes from "./modules/ongs/ongs.routes";

export interface AppOptions
  extends FastifyServerOptions,
  Partial<AutoloadPluginOptions> { }
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
  logger: true,
};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  fastify.register(animalRoutes, { prefix: "/animals" });
  fastify.register(userRoutes, { prefix: "/users" });
  fastify.register(ongRoutes, {
    prefix: '/ongs'
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  // eslint-disable-next-line no-void
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });
};

export default app;
export { app, options };
