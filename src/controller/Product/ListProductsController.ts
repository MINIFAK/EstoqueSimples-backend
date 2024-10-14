import { Request, Response } from "express";
import { ListProductsService } from "../../service/product/ListProductsService";

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const { stock, categoryId, minStock, maxStock } = req.body;

    const listProducts = new ListProductsService();

    const products = await listProducts.execute({
      stock,
      categoryId,
      minStock,
      maxStock,
    });

    res.json(products);
  }
}
