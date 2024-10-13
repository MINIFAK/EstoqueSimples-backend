import { Router, Request, Response } from "express";
import { CreateUserController } from "../controller/user/CreateUserController";
import { LoginUserController } from "../controller/user/LoginUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { DetailUserController } from "../controller/user/DetailUserController";

const userRoutes = Router();

userRoutes.post("/users", new CreateUserController().handle);

userRoutes.post("/login", new LoginUserController().handle);

userRoutes.get("/me", isAuthenticated, new DetailUserController().handle);

export default userRoutes;
