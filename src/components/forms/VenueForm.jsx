"use client";

import { useState } from "react";
import useAuthStore from "@/store/authStore";
import { useIsClient } from "usehooks-ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, X } from "lucide-react";
import FormInput from "../inputs/FormInput";
import { createVenueSchema } from "@/lib/schemas/create";
import { apiRequest } from "@/lib/api";
import ConfirmationModal from "../modals/ConfirmationModal";

const amenities = [
  { name: "wifi", label: "Wifi" },
  { name: "parking", label: "Parking" },
  { name: "breakfast", label: "Breakfast" },
  { name: "pets", label: "Pets allowed" },
];

function toFormValues(venue) {
  return {
    name: venue?.name ?? "",
    description: venue?.description ?? "",
    price: venue?.price ?? "",
    maxGuests: venue?.maxGuests ?? "",
    rating: venue?.rating ?? "",
    mediaUrl: venue?.media?.[0]?.url ?? "",
    mediaAlt: venue?.media?.[0]?.alt ?? "",
    wifi: venue?.meta?.wifi ?? false,
    parking: venue?.meta?.parking ?? false,
    breakfast: venue?.meta?.breakfast ?? false,
    pets: venue?.meta?.pets ?? false,
    address: venue?.location?.address ?? "",
    city: venue?.location?.city ?? "",
    zip: venue?.location?.zip ?? "",
    country: venue?.location?.country ?? "",
    lat: venue?.location?.lat ?? "",
    lng: venue?.location?.lng ?? "",
  };
}

export default function VenueForm({ venue }) {
  const editForm = Boolean(venue);
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);
  const router = useRouter();

  const isClient = useIsClient();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createVenueSchema),
    defaultValues: toFormValues(venue),
  });

  if (!isClient) return null;
  if (!user)
    return <p className="m-4">You have to be logged in to create a venue</p>;
  if (!user.venueManager)
    return <p className="m-4">Only venue managers can create venues</p>;

  async function onSubmit(formData) {
    const {
      name,
      description,
      price,
      maxGuests,
      mediaUrl,
      mediaAlt,
      wifi,
      parking,
      breakfast,
      pets,
      address,
      city,
      zip,
      country,
      lat,
      lng,
      rating,
    } = formData;

    try {
      const { data } = await apiRequest("holidaze/venues", {
        method: "POST",
        body: {
          name,
          description,
          price,
          maxGuests,
          media: mediaUrl ? [{ url: mediaUrl, alt: mediaAlt }] : [],
          meta: { wifi, parking, breakfast, pets },
          location: { address, city, zip, country, lat, lng },
          rating,
        },
        token: accessToken,
      });

      router.push(`/venues/${data.id}`);
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  function handleConfirm() {
    setConfirmOpen(false);
    handleSubmit(onSubmit)();
  }

  return (
    <form
      className="mx-auto my-10 flex w-full max-w-3xl flex-col gap-8 rounded-xl bg-white px-4 py-8 shadow-sm sm:px-8"
      onSubmit={handleSubmit(() => setConfirmOpen(true))}
    >
      <div>
        <h1 className="font-heading text-2xl font-medium text-text-100">
          Create venue
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <FormInput
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm text-text-80">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Describe your venue"
            className={`resize-none rounded-md border p-2 ${errors.description ? "border-2 border-error-icon" : "border-border"}`}
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm font-medium text-error-text">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <FormInput
            label="Price per night"
            name="price"
            type="number"
            register={register}
            error={errors.price}
          />
          <FormInput
            label="Max guests"
            name="maxGuests"
            type="number"
            register={register}
            error={errors.maxGuests}
          />
          <FormInput
            label="Rating"
            name="rating"
            type="number"
            register={register}
            error={errors.rating}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Image URL"
          name="mediaUrl"
          register={register}
          error={errors.mediaUrl}
        />
        <FormInput
          label="Image alt text"
          name="mediaAlt"
          register={register}
          error={errors.mediaAlt}
        />
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm text-text-80">Amenities</legend>
        <div className="flex flex-wrap gap-3">
          {amenities.map(({ name, label }) => (
            <label
              key={name}
              className="flex cursor-pointer items-center gap-3 rounded-md border border-border px-3 py-2 text-sm text-text-80 hover:border-primary-100"
            >
              <input
                type="checkbox"
                {...register(name)}
                className="size-4 accent-primary-100"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Address"
          name="address"
          register={register}
          error={errors.address}
        />
        <FormInput
          label="City"
          name="city"
          register={register}
          error={errors.city}
        />
        <FormInput
          label="Zip code"
          name="zip"
          register={register}
          error={errors.zip}
        />
        <FormInput
          label="Country"
          name="country"
          register={register}
          error={errors.country}
        />
        <FormInput
          label="Latitude"
          name="lat"
          register={register}
          error={errors.lat}
        />
        <FormInput
          label="Longitude"
          name="lng"
          register={register}
          error={errors.lng}
        />
        <div className="text-sm font-light">
          <p>Need help finding your exact coordinates?</p>
          <a
            href="https://www.latlong.net/"
            target="_blank"
            className="text-primary-100"
          >
            Click here
          </a>
        </div>
      </div>

      {errors.root && (
        <p className="text-sm font-medium text-error-text">
          {errors.root.message}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 pt-6 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary-100 px-4 py-2 font-medium text-white hover:bg-primary-hover disabled:opacity-60"
        >
          {isSubmitting ? "Creating..." : "Create venue"}
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

      <ConfirmationModal
        open={confirmOpen}
        title="Create venue"
        message="Are you sure you want to create this venue?"
        confirmText="Create venue"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </form>
  );
}
