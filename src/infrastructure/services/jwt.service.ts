import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "@/infrastructure/env";

export class JwtService {
  encode(payload: object, options?: SignOptions): string {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES as SignOptions["expiresIn"],
      ...options,
    });
  }

  decode(token: string) {
    return jwt.verify(token, env.JWT_SECRET);
  }
}
