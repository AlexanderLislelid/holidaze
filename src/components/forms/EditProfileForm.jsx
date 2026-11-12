"use client";

import useAuthStore from "@/store/authStore";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormInput from "../inputs/FormInput";
import { editProfileSchema } from "@/lib/schemas/profileEdit";
import { Check, CheckCircle, X } from "lucide-react";
import Link from "next/link";

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
      bio: user.bio ?? "",
      venueManager: user.venueManager,
    });
  }, [user, reset]);

  if (!mounted) return null;

  console.log(user);
  return (
    <form>
      <div className="flex gap-2">
        <FormInput
          label="Avatar URL"
          name="avatarUrl"
          register={register}
          error={errors.avatarUrl}
        />
        <FormInput
          label="Avatar Alt"
          name="avatarAlt"
          register={register}
          error={errors.avatarAlt}
        />
      </div>
      <div className="flex gap-2">
        <FormInput
          label="Banner URL"
          name="bannerUrl"
          register={register}
          error={errors.bannerUrl}
        />
        <FormInput
          label="Banner Alt"
          name="bannerAlt"
          register={register}
          error={errors.bannerAlt}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="bio" className="text-sm text-text-80">
          Bio
        </label>
        <textarea
          id="bio"
          rows={4}
          className={`rounded-md border p-2 ${errors.bio ? "border-2 border-error-icon" : "border-border"}`}
          {...register("bio")}
        />
        {errors.bio && (
          <p className="text-sm font-medium text-error-text">
            {errors.bio.message}
          </p>
        )}
        <p className="text-sm text-text-80">Describe yourself</p>
      </div>
      {!user.venueManager ? (
        <label className="flex w-fit cursor-pointer items-center gap-3 rounded-md border border-border px-3 py-2 text-sm text-text-80">
          <input
            type="checkbox"
            {...register("venueManager")}
            className="size-4 accent-primary-100"
          />
          I want to become a venue manager
        </label>
      ) : (
        ""
      )}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 rounded-md bg-primary-100 px-4 py-1 text-white hover:bg-primary-hover">
          Save Changes <CheckCircle size={18} />
        </button>
        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-md border border-primary-100 bg-white px-4 py-1 text-primary-100"
        >
          Cancel
          <X size={18} />{" "}
        </Link>
      </div>
    </form>
  );
}
