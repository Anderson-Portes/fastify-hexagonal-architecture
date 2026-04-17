import { createContainer } from "awilix";
import { repositories } from "./repositories";
import { usecases } from "./usecases";
import { controllers } from "./controllers";
import { utils } from "./utils";

export const container = createContainer()

container.register({
  ...repositories,
  ...utils,
  ...usecases,
  ...controllers
})