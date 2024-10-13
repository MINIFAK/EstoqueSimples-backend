import { Request, Response } from "express";
import { UserRole } from "@prisma/client";

export class getRolesController {
  async handle(req: Request, res: Response) {
    const roles = Object.values(UserRole);

    res.json(roles);
  }
}
