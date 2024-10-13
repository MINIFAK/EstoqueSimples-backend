import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const deleteUser = new DeleteUserService();

    const user = await deleteUser.execute({ id });

    res.json(user);
  }
}
