"use client";

import useAuthStore from "@/store/authStore";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormInput from "../inputs/FormInput";
import { editProfileSchema } from "@/lib/schemas/profileEdit";
import { CheckCircle, X } from "lucide-react";
import Link from "next/link";
import { apiRequest } from "@/lib/api";

export default function EditProfileForm() {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);
  const accessToken = useAuthStore((state) => state.accessToken);
  const router = useRouter();

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

  async function onSubmit(formData) {
    const { avatarAlt, avatarUrl, bannerAlt, bannerUrl, bio, venueManager } =
      formData;

    try {
      const { data } = await apiRequest(`holidaze/profiles/${user.name}`, {
        method: "PUT",
        body: {
          avatar: { url: avatarUrl, alt: avatarAlt },
          banner: { url: bannerUrl, alt: bannerAlt },
          bio,
          venueManager,
        },
        token: accessToken,
      });

      updateUser(data);
      router.push("/profile");
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  return (
    <form
      className="mx-auto my-10 flex w-full max-w-3xl flex-col gap-8 rounded-xl bg-white px-4 py-8 shadow-sm sm:px-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h1 className="font-heading text-2xl font-medium text-text-100">
          Edit profile
        </h1>
        <p className="text-sm text-muted-100">
          Update your avatar, banner and bio.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Avatar URL"
          name="avatarUrl"
          register={register}
          error={errors.avatarUrl}
        />
        <FormInput
          label="Avatar alt text"
          name="avatarAlt"
          register={register}
          error={errors.avatarAlt}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Banner URL"
          name="bannerUrl"
          register={register}
          error={errors.bannerUrl}
        />
        <FormInput
          label="Banner alt"
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
          placeholder="Tell us a little about yourself"
          className={`resize-none rounded-md border p-2 ${errors.bio ? "border-2 border-error-icon" : "border-border"}`}
          {...register("bio")}
        />
        {errors.bio && (
          <p className="text-sm font-medium text-error-text">
            {errors.bio.message}
          </p>
        )}
      </div>

      {!user.venueManager && (
        <label className="flex w-fit cursor-pointer items-center gap-3 rounded-md border border-border px-3 py-2 text-sm text-text-80 hover:bg-primary-10">
          <input
            type="checkbox"
            {...register("venueManager")}
            className="size-4 accent-primary-100"
          />
          I want to become a venue manager
        </label>
      )}
      {errors.root && (
        <p className="text-sm font-medium text-error-text">
          {errors.root.message}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 pt-6 sm:flex-row">
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary-100 px-4 py-2 font-medium text-white hover:bg-primary-hover"
        >
          Save changes
          <CheckCircle size={18} />
        </button>
        <Link
          href="/profile"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary-100 px-4 py-2 font-medium text-primary-100 hover:bg-secondary-10"
        >
          Cancel
          <X size={18} />
        </Link>
      </div>
    </form>
  );
}
