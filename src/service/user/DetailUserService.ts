import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export class DetailUserService {
  async execute({ id }: { id: string }) {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
      select: {
        email: true,
        name: true,
        id: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user)
      throw new AppError(
        "Não foi possível completar a operação. Por favor, faça o login novamente",
        404
      );

    return user;
  }
}
