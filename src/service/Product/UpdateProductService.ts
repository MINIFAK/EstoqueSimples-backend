import prismaClient from "../../Prisma/prismaClient";
import { ProductProps } from "../../utils/types/Product";

export class UpdateProductService {
  async execute({
    id,
    name,
    stock,
    price,
    minimumStock,
    measurementUnit,
    categoryId,
  }: ProductProps) {
    const product = await prismaClient.product.update({
      where: {
        id,
      },
      data: {
        name,
        stock,
        price,
        minimumStock,
        measurementUnit,
        categoryId,
      },
    });
    return product;
  }
}
