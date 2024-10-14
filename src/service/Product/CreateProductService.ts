import { MeasurementUnit } from "@prisma/client";
import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";
import { ProductProps } from "../../utils/types/Product";

export class CreateProductService {
  async execute({
    name,
    price,
    stock,
    minimumStock,
    measurementUnit,
    categoryId,
  }: ProductProps) {
    const categoryExists = await prismaClient.category.findUnique({
      where: { id: categoryId },
    });

    if (!categoryExists) {
      throw new AppError("A categoria especificada não existe", 404);
    }
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        stock,
        minimumStock,
        measurementUnit,
        categoryId,
      },
    });
    if (!product) throw new AppError("Não foi possível criar o produto", 404);

    return product;
  }
}
