import prismaClient from "../../Prisma/prismaClient";
import { AppError } from "../../utils/error/RouterError";

export enum Stock {
  asc = "asc",
  desc = "desc",
}
interface ListProductsProps {
  stock?: Stock;
  categoryId?: string;
  minStock?: number;
  maxStock?: number;
}

export class ListProductsService {
  async execute({ stock, categoryId, minStock, maxStock }: ListProductsProps) {
    if (stock && stock !== "asc" && stock !== "desc") {
      throw new AppError(
        "Apenas o tipo 'asc' e 'desc' podem ser passados para o stock",
        400
      );
    }

    if (stock && categoryId) {
      if (minStock && maxStock) {
        return await prismaClient.product.findMany({
          where: {
            categoryId,
            stock: {
              gte: minStock,
              lte: maxStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (minStock && !maxStock) {
        return await prismaClient.product.findMany({
          where: {
            categoryId,
            stock: {
              gte: minStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (!minStock && maxStock) {
        return await prismaClient.product.findMany({
          where: {
            categoryId,
            stock: {
              lte: maxStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (!minStock && !maxStock) {
        return await prismaClient.product.findMany({
          where: {
            categoryId,
          },
          orderBy: {
            stock,
          },
        });
      }
    }

    if (stock && !categoryId) {
      if (minStock && maxStock) {
        return await prismaClient.product.findMany({
          where: {
            stock: {
              gte: minStock,
              lte: maxStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (minStock && !maxStock) {
        return await prismaClient.product.findMany({
          where: {
            stock: {
              gte: minStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (!minStock && maxStock) {
        return await prismaClient.product.findMany({
          where: {
            stock: {
              lte: maxStock,
            },
          },
          orderBy: {
            stock,
          },
        });
      }
      if (!minStock && !maxStock) {
        return await prismaClient.product.findMany({
          orderBy: {
            stock,
          },
        });
      }
    }

    if (!stock && categoryId) {
      return await prismaClient.product.findMany({
        where: {
          categoryId,
        },
      });
    }

    return await prismaClient.product.findMany({
      orderBy: {
        categoryId: "asc",
      },
    });
  }
}
