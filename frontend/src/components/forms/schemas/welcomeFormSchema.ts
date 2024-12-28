import { z } from "zod";

// Esquema de validación para el formulario WelcomeForm
export const welcomeFormSchema = z.object({
  client_name: z.string().min(1, "El nombre es obligatorio"), // Valida que no esté vacío
  client_surname: z.string().min(1, "El apellido es obligatorio"), // Valida que no esté vacío
  client_email: z
    .string()
    .min(1, "El correo es obligatorio"), // Asegura que no esté vacío
});

// Tipo inferido para usar con TypeScript
export type WelcomeFormValues = z.infer<typeof welcomeFormSchema>;
