"use client";
import { apiRequest } from "@/lib/api";
import { registerSchema } from "@/lib/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormInput from "../inputs/FormInput";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      venueManager: false,
    },
  });

  async function onSubmit(formData) {
    const { userName, email, password, venueManager } = formData;

    try {
      await apiRequest("auth/register", {
        method: "POST",
        body: { name: userName, email, password, venueManager },
      });

      router.push("/login");
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6 bg-white px-12 py-6 md:max-w-125 md:rounded-r-xl"
    >
      <div>
        <img src="/holidaze-logo-light-36px.svg" alt="holidaze logo" />
        <h1 className="text-2xl font-medium">Create an account</h1>
      </div>
      <FormInput
        label="Username"
        name="userName"
        type="text"
        placeholder="your_username"
        register={register}
        error={errors.userName}
      />

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
        placeholder="At least 8 characters"
        register={register}
        error={errors.password}
      />

      <FormInput
        label="Repeat password"
        name="confirmPassword"
        type="password"
        placeholder="Repeat your password"
        register={register}
        error={errors.confirmPassword}
      />

      <label className="flex items-center gap-2 text-sm text-text-80">
        <input
          type="checkbox"
          {...register("venueManager")}
          className="size-4 accent-primary-100"
        />
        I want to register as a venue manager
      </label>

      {errors.root && <p>{errors.root.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-6 flex items-center justify-center gap-2 rounded-lg bg-primary-100 p-2 font-medium text-white hover:bg-primary-hover"
      >
        {isSubmitting ? "Registering" : "Register"}
        <UserPlus
          size={18}
          className="transition duration-200 group-hover:translate-x-1"
        />
      </button>
      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-100">Already have an account?</p>
        <Link
          href={"/login"}
          className="text-primary-100 hover:font-medium hover:text-primary-hover"
        >
          Log in
        </Link>
      </div>
    </form>
  );
}
