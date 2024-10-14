import { Request, Response } from "express";
import { GetProductService } from "../../service/product/getProductService";

export class GetProductController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const getProduct = new GetProductService();

    const product = await getProduct.execute({ id });

    res.json(product);
  }
}
