import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error/RouterError";
import { DetailUserService } from "../service/user/DetailUserService";

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || !req.user.id)
    throw new AppError(
      "Não foi possível completar a operação. Por favor, faça o login novamente",
      404
    );

  const { id } = req.user;

  const detailUser = new DetailUserService();

  const user = await detailUser.execute({ id });
    
  if (user.role != "ADMIN")
    throw new AppError(
      "Somente administradores têm permissão para esta operação",
      403
    );

  next();
}
