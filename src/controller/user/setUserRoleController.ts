import { Request, Response } from "express";
import { setUserRoleService } from "../../service/user/setUserRoleService";

export class setUserRoleController {
  async handle(req: Request, res: Response) {
    const { id, role } = req.body;

    const setUserRole = new setUserRoleService();

    const user = await setUserRole.execute({ id, role });

    res.json(user);
  }
}
