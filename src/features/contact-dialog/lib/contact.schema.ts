import { z } from '@/shared/lib/forms';

export const contactSchema = z.object({
  name: z.string().nonempty('Please enter your name.'),
  email: z.string().email('A valid email address is required.'),
  message: z.string().nonempty('Please let us know how we can help.'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
