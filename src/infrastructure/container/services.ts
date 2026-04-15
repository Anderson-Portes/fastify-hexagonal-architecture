import { JwtService } from "@/infrastructure/services/jwt.service";
import { asClass } from "awilix";

export const services = {
  jwtService: asClass(JwtService).singleton()
}
