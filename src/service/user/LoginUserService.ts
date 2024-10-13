import prismaClient from "../../Prisma/prismaClient";
import { compare } from "bcrypt";
import { AppError } from "../../utils/error/RouterError";
import jwt from "jsonwebtoken";

export class LoginUserService {
  async execute({ email, password }: { email: string; password: string }) {
    if (!email || !password)
      throw new AppError("Por favor, forneça seu e-mail e senha", 404);

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        role: true,
        name: true,
        password: true,
      },
    });

    if (!user)
      throw new AppError("O e-mail ou a senha fornecidos são inválidos", 400);

    const { id, name, role } = user;

    const passwordHash = await compare(password, user.password);

    if (!passwordHash)
      throw new AppError("O e-mail ou a senha fornecidos são inválidos", 400);

    const token = jwt.sign({ role, name, email }, `${process.env.JWT_SECRET}`, {
      subject: id,
      expiresIn: "5d",
    });

    return { token, name, email };
  }
}
