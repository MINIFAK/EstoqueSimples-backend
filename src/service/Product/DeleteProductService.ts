import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export class DeleteProductService {
  async execute({ id }: { id: string }) {
    const product = await prismaClient.product
      .delete({
        where: {
          id,
        },
      })
      .catch(() => {
        throw new AppError(
          "Não foi possível encontrar o produto para excluir",
          404
        );
      });
    return product;
  }
}
