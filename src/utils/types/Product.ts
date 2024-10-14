import { MeasurementUnit } from "@prisma/client";

export interface ProductProps {
  id?: string;
  name: string;
  price: number;
  stock: number;
  minimumStock: number;
  measurementUnit: MeasurementUnit;

  categoryId: string;
}
