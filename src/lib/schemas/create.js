import z from "zod";

const required = z.string().trim().min(1, "Required");

const url = z.url("Must be a valid URL").or(z.literal(""));

const alt = z.string().max(119, "Must be less than 120 characters");

const checkbox = z.boolean();

export const createVenueSchema = z.object({
  name: required,
  description: required,
  price: z.coerce.number().min(0, "Price must be 0 or more"),
  maxGuests: z.coerce
    .number()
    .int()
    .min(1, "Minimum 1 guest")
    .max(100, "Max 100 guests"),

  mediaUrl: url,
  mediaAlt: alt,

  wifi: checkbox,
  parking: checkbox,
  breakfast: checkbox,
  pets: checkbox,

  address: z.string(),
  city: z.string(),
  zip: z.string(),
  country: z.string(),
  lat: z.coerce
    .number("Must be a number")
    .min(-90, "Must be between -90 and 90")
    .max(90, "Must be between -90 and 90"),
  lng: z.coerce
    .number("Must be a number")
    .min(-180, "Must be between -180 and 180")
    .max(180, "Must be between -180 and 180"),
  rating: z.coerce
    .number("Must be a number")
    .min(0, "Must be between 0 and 5")
    .max(5, "Must be between 0 and 5"),
});
