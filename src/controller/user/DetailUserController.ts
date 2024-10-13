import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";
import { AppError } from "../../utils/error/RouterError";

export class DetailUserController {
  async handle(req: Request, res: Response) {

    if (!req.user)
      throw new AppError(
        "Erro de autenticação. Por favor, faça login novamente para acessar este recurso",
        401
      );

    const { id } = req.user;

    if (!id)
      throw new AppError(
        "Erro de autenticação. Por favor, faça login novamente para acessar este recurso",
        401
      );

    const detailUser = new DetailUserService();

    const user = await detailUser.execute({ id });

    res.json(user);
  }
}
