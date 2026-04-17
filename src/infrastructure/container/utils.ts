import { JwtUtil } from "@/utils/jwt.util";
import { asClass } from "awilix";

export const utils = {
  jwtUtil: asClass(JwtUtil).singleton()
}
