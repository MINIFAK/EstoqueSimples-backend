import { Router } from "express";
import { CreateCategoryController } from "../controller/category/CreateCategoryController";

const categoryRoutes = Router();

categoryRoutes.post("/category", new CreateCategoryController().handle);

export default categoryRoutes;
