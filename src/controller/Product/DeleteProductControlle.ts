import { Request, Response } from "express";
import { DeleteProductService } from "../../service/Product/DeleteProductService";
export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute({ id });

    res.json(product);
  }
}
