import prismaClient from "../../Prisma/prismaClient";

enum Stock {
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
            categoryId: "asc",
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
