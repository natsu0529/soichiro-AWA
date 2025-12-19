import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'nameRequired').max(100),
  email: z.string().email('emailInvalid'),
  message: z.string().min(10, 'messageMin').max(1000, 'messageMax'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
