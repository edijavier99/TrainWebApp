import { z } from "zod";

// Define el esquema de validación para el formulario de inicio de sesión


export const article = z.object({
    category: z.string(),
    title: z.string().email("Debe ser un correo electrónico válido"), // Valida que sea un correo electrónico
    first_paragraph: z.string(),
    second_paragraph: z.string(),
    third_paragraph: z.string(),
    fourth_paragraph: z.string(),
    fith_paragraph: z.string(),
    image: z.string()
});

// Define el tipo inferido a partir del esquema
export type FormValuesArtitcle = z.infer<typeof article>;
