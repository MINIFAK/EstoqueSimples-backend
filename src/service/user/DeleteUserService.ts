import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export class DeleteUserService {
  async execute({ id }: { id: string }) {
    const userToDelete = await prismaClient.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        role: true,
      },
    });
    if (!userToDelete) {
      throw new AppError("Usuário não encontrado", 404);
    }
    if (userToDelete.role === "ADMIN") {
      throw new AppError(
        "A exclusão de um usuário administrador não é permitida",
        403
      );
    }

    const user = await prismaClient.user
      .delete({
        where: {
          id,
          NOT: {
            role: "ADMIN",
          },
        },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      })
      .catch(() => {});

    return user;
  }
}
