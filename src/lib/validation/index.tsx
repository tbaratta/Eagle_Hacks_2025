import * as z from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Enter a valid name'}),
  email: z.string().email(),
  uin: z.union([z.number().min(5, { message: 'Enter a valid UIN number' }) .optional(), z.null().optional()]),
  major: z.string().min(5, { message: 'Enter a valid major'}),
  expectedGradYear: z.union([z.number().min(5, { message: 'Enter a valid expected graduation year' }), z.null()]),
  academicYear: z.string().min(5, { message: 'Enter a valid academic year'}),
});
