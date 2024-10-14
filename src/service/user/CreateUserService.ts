import { hash } from "bcrypt";
import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";
import { User } from "../../utils/types/User";

export class CreateUserService {
  async execute({ email, password, name, role = "USUARIO" }: User) {
    if (!email || !password || !name)
      throw new AppError("Por favor, forneça seu e-mail, senha e nome", 404);

    const hasUser = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (hasUser) {
      throw new AppError(
        "Não foi possível criar a conta, pois esse usuário já está registrado",
        409
      );
    }

    const hashedPassword = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    return user;
  }
}
