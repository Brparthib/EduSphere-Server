import z from 'zod';

const userValidationSchema = z.object({
  id: z
    .string({ required_error: 'Id is required' })
    .min(1, 'Id is required')
    .max(30, 'Id is exceed 30 character'),

  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, 'Password can not exceed 20 character')
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
