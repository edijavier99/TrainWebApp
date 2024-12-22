import { z } from "zod";

// Define el esquema de validación para el formulario de inicio de sesión
export const login = z.object({
  user_email: z.string().email("Debe ser un correo electrónico válido"), // Valida que sea un correo electrónico
  user_password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"), // Requiere mínimo 6 caracteres
});

// Define el tipo inferido a partir del esquema
export type FormValuesLogin = z.infer<typeof login>;
