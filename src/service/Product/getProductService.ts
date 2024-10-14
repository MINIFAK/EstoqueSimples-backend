import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export class GetProductService {
  async execute({ id }: { id: string }) {
    const product = await prismaClient.product
      .findFirst({
        where: {
          id,
        },
      })
      .catch(() => {
        throw new AppError("Não foi possível encontrar o produto", 404);
      });
    return product;
  }
}
