import { Router } from "express";
import { CreateProductController } from "../controller/Product/CreateProductController";
import { UpdateProductController } from "../controller/Product/UpdateProductController";

const productRoutes = Router();

productRoutes.post("/product", new CreateProductController().handle);

productRoutes.put("/product", new UpdateProductController().handle);

export default productRoutes;
