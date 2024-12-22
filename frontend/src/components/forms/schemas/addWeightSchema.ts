import { z } from "zod";


export const weightRecordSchema = z.object({
    weightValue: z
      .string()
      .nonempty({ message: "Weight value is required" })
      .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Weight value must be a positive number",
      }),
  });
  
  // Infer the TypeScript type from the schema
  export type WeightRecordValues = z.infer<typeof weightRecordSchema>;
  