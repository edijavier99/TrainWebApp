import { z } from "zod";

// Define el esquema de validación para el formulario de inicio de sesión
export const userExistenceSchema = z.object({
  user_email: z.string().email("Debe ser un correo electrónico válido"), // Valida que sea un correo electrónico
});

// Define el tipo inferido a partir del esquema
export type FormValuesUserExistence = z.infer<typeof userExistenceSchema>;
