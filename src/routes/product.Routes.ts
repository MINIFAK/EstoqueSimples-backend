import { Router } from "express";
import { CreateProductController } from "../controller/Product/CreateUserController";

const productRoutes = Router();

productRoutes.post("/product", new CreateProductController().handle);

export default productRoutes;
