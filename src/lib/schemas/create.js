import z from "zod";

const required = z.string().trim().min(1, "Required");

const url = z.url("Must be a valid URL").or(z.literal(""));

const alt = z.string().max(119, "Must be less than 120 characters");

const checkbox = z.boolean();

export const createVenueSchema = z.object({
  name: required,
  description: required,
  price: z.coerce.number().min(0, "Price must be 0 or more"),
  maxGuests: z.coerce.number().int().min(1).max(100),

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
  lat: z.number(),
  lng: z.number(),
});
