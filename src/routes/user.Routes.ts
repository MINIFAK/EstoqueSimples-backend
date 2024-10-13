import { Router, Request, Response } from "express";
import { CreateUserController } from "../controller/user/CreateUserController";
import { LoginUserController } from "../controller/user/LoginUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { DetailUserController } from "../controller/user/DetailUserController";
import { setUserRoleController } from "../controller/user/setUserRoleController";
import { isAdmin } from "../middlewares/isAdmin";
import { getRolesController } from "../controller/user/getRolesController";

const userRoutes = Router();

userRoutes.post("/users", new CreateUserController().handle);

userRoutes.post("/login", new LoginUserController().handle);

userRoutes.get("/me", isAuthenticated, new DetailUserController().handle);

userRoutes.put(
  "/user/role",
  isAuthenticated,
  isAdmin,
  new setUserRoleController().handle
);
userRoutes.get(
  "/users/roles",
  isAuthenticated,
  isAdmin,
  new getRolesController().handle
);

export default userRoutes;
