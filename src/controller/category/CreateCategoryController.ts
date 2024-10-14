import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({ name });

    res.json(category);
  }
}
