"use client";
import { apiRequest } from "@/lib/api";
import { loginSchema } from "@/lib/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import FormInput from "../inputs/FormInput";
import { LogIn } from "lucide-react";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-125 flex-col gap-6 bg-white px-12 py-6"
    >
      <div>
        <img src="/holidaze-logo-light-36px.svg" alt="holidaze logo" />
        <h1 className="text-2xl font-medium">Log in to your account</h1>
      </div>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="example@stud.noroff.no"
        register={register}
        error={errors.email}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
        register={register}
        error={errors.password}
      />

      {errors.root && <p>{errors.root.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex items-center justify-center gap-2 rounded-lg bg-primary-100 p-2 font-medium text-white hover:bg-primary-hover"
      >
        {isSubmitting ? "Logging in" : "Log in"}
        <LogIn
          size={18}
          className="transition duration-200 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
