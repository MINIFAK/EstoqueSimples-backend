import { Router } from "express";
import { CreateProductController } from "../controller/product/CreateProductController";
import { UpdateProductController } from "../controller/product/UpdateProductController";
import { DeleteProductController } from "../controller/product/DeleteProductControlle";
import { ListProductsController } from "../controller/product/ListProductsController";

const productRoutes = Router();

productRoutes.get("/products", new ListProductsController().handle);

productRoutes.post("/product", new CreateProductController().handle);

productRoutes.put("/product", new UpdateProductController().handle);

productRoutes.delete("/product", new DeleteProductController().handle);

export default productRoutes;
