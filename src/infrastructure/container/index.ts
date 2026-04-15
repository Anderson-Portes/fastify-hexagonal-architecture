import { createContainer } from "awilix";
import { repositories } from "./repositories";
import { services } from "./services";
import { usecases } from "./usecases";
import { controllers } from "./controllers";

export const container = createContainer()

container.register({
  ...repositories,
  ...services,
  ...usecases,
  ...controllers
})