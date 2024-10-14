import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    let { name, price, stock, minimumStock, measurementUnit, categoryId } =
      req.body;
    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      stock,
      minimumStock,
      measurementUnit,
      categoryId,
    });

    res.json(product);
  }
}
