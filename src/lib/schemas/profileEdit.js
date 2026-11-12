import z from "zod";

const url = z.url("Must be a valid URL").or(z.literal(""));

const alt = z.string().max(119, "Must be less than 120 characters");

const bio = z.string().max(159, "Must be less than 160 characters");

const venueManager = z.boolean();

export const editProfileSchema = z.object({
  avatarUrl: url,
  avatarAlt: alt,
  bannerUrl: url,
  bannerAlt: alt,
  bio,
  venueManager,
});
