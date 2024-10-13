import { UserRole } from "@prisma/client";
import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export class setUserRoleService {
  async execute({ id, role }: { id: string; role: UserRole }) {
    if (!Object.values(UserRole).includes(role as UserRole))
      throw new AppError("O cargo fornecido não está entre os válidos.", 400);

    const user = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        role,
      },
    });
    if (!user)
      throw new AppError("Não conseguimos encontrar esse usuário", 404);

    return user;
  }
}
