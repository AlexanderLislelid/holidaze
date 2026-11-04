"use client";
import { apiRequest } from "@/lib/api";
import { loginSchema } from "@/lib/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(formData) {
    try {
      const { data } = await apiRequest("auth/login?_holidaze=true", {
        method: "POST",
        body: formData,
      });

      const { accessToken, ...user } = data;
      login(user, accessToken);
      router.push("/");
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      {errors.root && <p>{errors.root.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in" : "Log in"}
      </button>
    </form>
  );
}
