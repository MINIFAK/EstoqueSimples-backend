import prismaClient from "../../Prisma/prismaClient";

export class CreateCategoryService {
  async execute({ name }: { name: string }) {
    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });

    return category;
  }
}
