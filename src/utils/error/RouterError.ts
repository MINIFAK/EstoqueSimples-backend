export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Define o nome da classe de erro
    this.name = this.constructor.name;

    // Captura a pilha de chamadas para fins de depuração
    Error.captureStackTrace(this, this.constructor);
  }
}
