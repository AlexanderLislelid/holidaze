"use client";

import useAuthStore from "@/store/authStore";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormInput from "../inputs/FormInput";
import { editProfileSchema } from "@/lib/schemas/profileEdit";

export default function EditProfileForm() {
  const user = useAuthStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      avatarUrl: "",
      avatarAlt: "",
      bannerUrl: "",
      bannerAlt: "",
      bio: "",
      venueManager: false,
    },
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!user) return;
    reset({
      avatarUrl: user.avatar?.url ?? "",
      avatarAlt: user.avatar?.alt ?? "",
      bannerUrl: user.banner?.url ?? "",
      bannerAlt: user.banner?.alt ?? "",
      bio: user.bio,
      venueManager: user.venueManager,
    });
  }, [user, reset]);

  if (!mounted) return null;

  console.log(user);
  return (
    <form>
      <FormInput
        label="Avatar URL"
        name="avatarUrl"
        register={register}
        error={errors.avatarUrl}
      />
    </form>
  );
}
