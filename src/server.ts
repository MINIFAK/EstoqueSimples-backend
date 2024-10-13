import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import userRoutes from "./routes/user.Routes";
import { AppError } from "./utils/error/RouterError";

const express = require("express");
const app = express();
const PORT = 3333;

app.use(express.json());

app.use(userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    status: "error",
    message: "Ocorreu um erro interno. Tente novamente mais tarde.",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Servidor online em http://localhost:${PORT}`);
});
