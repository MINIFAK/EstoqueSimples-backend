import { Request, Response } from "express";
import {
  ListProductsService,
  Stock,
} from "../../service/product/ListProductsService";

interface ListProductsProps {
  stock?: Stock;
  categoryId?: string;
  minStock?: string;
  maxStock?: string;
}
export class ListProductsController {
  async handle(req: Request, res: Response) {
    const { stock, categoryId, minStock, maxStock } =
      req.query as ListProductsProps;

    const listProducts = new ListProductsService();

    const products = await listProducts.execute({
      stock,
      categoryId,
      minStock: Number(minStock),
      maxStock: Number(maxStock),
    });

    res.json(products);
  }
}
