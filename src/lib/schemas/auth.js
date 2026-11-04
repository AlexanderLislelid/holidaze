import z from "zod";

const email = z
  .email("Enter a valid email")
  .endsWith("@stud.noroff.no", "Must be a stud.noroff.no email");

const password = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const loginSchema = z.object({
  email,
  password,
});
