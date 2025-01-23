import * as z from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Enter a valid name'}),
  email: z.string().email(),
  uin: z.union([z.number().min(5, { message: 'Enter a valid UIN number' }) .optional(), z.null().optional()]),
  major: z.string().min(5, { message: 'Enter a valid major'}),
  expectedGradYear: z.union([z.number().min(5, { message: 'Enter a valid expected graduation year' }), z.null()]),
  tShirtSize: z.string().min(1, { message: 'Enter a valid T-shirt size'}),
  dietaryRestriction: z.string().min(1,{ message: 'Enter a valid dietary restriction'}),
  firstHackathon: z.string().min(1, { message: "Enter a valid response"}),
  programmingExperience: z.string().min(1, { message: "Enter a valid response"})
});
