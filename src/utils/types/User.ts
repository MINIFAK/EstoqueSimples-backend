import { UserRole } from "@prisma/client";

export interface User {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}
