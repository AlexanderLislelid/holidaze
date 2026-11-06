import z from "zod";

const email = z
  .email("Enter a valid email")
  .endsWith("@stud.noroff.no", "Must be a stud.noroff.no email");

const password = z
  .string()
  .min(8, "Password must be at least 8 characters long");

const userName = z
  .string()
  .trim()
  .min(1, "Username is required")
  .regex(
    /^[A-Za-z0-9_]+$/,
    "Username can only contain letters, numbers and underscore (_)",
  );

export const loginSchema = z.object({
  email,
  password,
});

const confirmPassword = z.string().min(1, "Please repeat your password");

export const registerSchema = z
  .object({
    userName,
    email,
    password,
    confirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
