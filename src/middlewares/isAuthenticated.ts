import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../utils/error/RouterError";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new AppError("Autenticação é necessária", 401);

  try {
    const usuario = verify(token, `${process.env.JWT_SECRET}`);

    req.user = req.user || {};

    req.user.id = usuario.sub as string;

    next();
  } catch (error) {
    throw new AppError(
      "Erro de autenticação. Por favor, faça login novamente para acessar este recurso",
      401
    );
  }
}
