import { Router, Request, Response } from "express";
import { CreateUserController } from "../controller/user/CreateUserController";
import { LoginUserController } from "../controller/user/LoginUserController";

const userRoutes = Router();

userRoutes.post("/users", new CreateUserController().handle);

userRoutes.get("/me", new LoginUserController().handle);

export default userRoutes;
