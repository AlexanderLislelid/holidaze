"use client";

import ToggleContentButton from "@/components/buttons/ToggleContentButton";
import useAuthStore from "@/store/authStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (!user)
    return <p className="m-4">You have to be logged in to see your profile</p>;

  return (
    <div>
      <div className="relative aspect-3/1 w-full overflow-hidden md:aspect-4/1">
        {user.banner?.url && (
          <Image
            src={user.banner.url}
            alt={user.banner.alt || `${user.name} banner`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute h-40 w-40 rounded-full bg-background"></div>
      </div>
      <h1>{user.name}'s profile</h1>
      <ToggleContentButton />
    </div>
  );
}
