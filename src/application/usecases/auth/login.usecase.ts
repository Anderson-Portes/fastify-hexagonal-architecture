import { ZodError } from "zod";
import { LoginDto } from "../../dto/auth/login.dto";
import { IUserRepository } from "@/domain/repositories/users.repository";
import bcrypt from "bcryptjs";
import { JwtUtil } from "@/utils/jwt.util";

export class LoginUseCase {
  constructor(
    private readonly deps: {
      usersRepository: IUserRepository;
      jwtUtil: JwtUtil;
    }
  ) { }

  async execute(data: LoginDto) {
    const user = await this.deps.usersRepository.findByEmail(data.email)
    if (!user || !bcrypt.compareSync(data.password, user.password!)) {
      throw new ZodError([{
        message: "Invalid credentials",
        path: ["email"],
        code: "custom"
      }, {
        message: "Invalid credentials",
        path: ["password"],
        code: "custom"
      }])
    }
    const token = this.deps.jwtUtil.encode({ id: user.id });
    return { token };
  }
}