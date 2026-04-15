import { ZodError } from "zod";
import { LoginDto } from "../../dto/auth/login.dto";
import { IUserRepository } from "@/domain/repositories/users.repository";
import { JwtService } from "@/infrastructure/services/jwt.service";
import bcrypt from "bcryptjs";

export class LoginUseCase {
  constructor(
    private readonly deps: {
      usersRepository: IUserRepository;
      jwtService: JwtService;
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
    const token = this.deps.jwtService.encode({ id: user.id });
    return { token };
  }
}