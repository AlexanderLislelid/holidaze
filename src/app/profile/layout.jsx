"use client";

import Link from "next/link";
import { useIsClient } from "usehooks-ts";
import useAuthStore from "@/store/authStore";

/**
 * Shared layout for all /profile routes.
 * Waits until the client has loaded the auth store from localStorage,
 * then shows a login message if no user is logged in.
 * Child pages and components can assume `user` exists.
 */
export default function ProfileLayout({ children }) {
  const user = useAuthStore((state) => state.user);
  const isClient = useIsClient();

  if (!isClient) return null;
  if (!user)
    return (
      <p className="m-4">
        You have to be{" "}
        <Link href="/login" className="text-primary-100 underline">
          logged in
        </Link>{" "}
        to see this page.
      </p>
    );

  return children;
}
