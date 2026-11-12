"use client";

import useAuthStore from "@/store/authStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SquarePen } from "lucide-react";
import UserBookings from "@/components/profile/UserBookings";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (!user)
    return <p className="m-4">You have to be logged in to see your profile</p>;
  console.log(user);
  return (
    <div>
      <div className="relative aspect-3/1 w-full md:aspect-4/1">
        <div className="absolute inset-0 overflow-hidden">
          {user.banner?.url && (
            <Image
              src={user.banner.url}
              alt={user.banner.alt || `${user.name} banner`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="absolute -bottom-14 left-4 flex h-30 w-30 items-center justify-center rounded-full bg-background">
          <Image
            src={user.avatar.url}
            alt={user.avatar.alt || `${user.name} avatar`}
            height={100}
            width={100}
            className="h-25 w-25 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="mt-2 ml-35 min-h-12">
        <h1 className="text-xl font-semibold">{user.name}</h1>
        <p className="text-sm text-text-80">{user.email}</p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="mx-4 my-6 flex flex-col gap-4 md:w-1/3">
          <h2 className="text-lg">Bio</h2>
          {user.bio ? (
            <p>{user.bio}</p>
          ) : (
            <p className="text-text-80">User has not written a bio yet.</p>
          )}
          <Link
            href="profile/edit"
            className="flex max-w-62 items-center justify-center gap-2 rounded-md bg-primary-100 py-1 text-white hover:bg-primary-hover"
          >
            Edit profile <SquarePen size={20} />
          </Link>
        </div>
        <div className="mx-4 my-6 md:flex-1">
          <h2 className="mb-3 text-lg">Upcoming Bookings</h2>
          <UserBookings />
        </div>
      </div>
    </div>
  );
}
