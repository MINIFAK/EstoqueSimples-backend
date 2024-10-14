import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";
import { ProductProps } from "../../utils/types/Product";

// TODO Ver melhor sobre como sera feito a atualização do produto e sobre as logs de movimentações
export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const {
      id,
      name,
      price,
      stock,
      minimumStock,
      measurementUnit,
      categoryId,
    }: ProductProps = req.body;
    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
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
