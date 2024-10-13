import { Request, Response } from "express";
import { LoginUserService } from "../../service/user/LoginUserService";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const loginUser = new LoginUserService();

    const user = await loginUser.execute({ email, password });

    res.json(user);
  }
}
