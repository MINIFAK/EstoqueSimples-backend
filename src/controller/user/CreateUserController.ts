import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password, name, role } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ email, password, name, role });

    res.json(user);
  }
}
