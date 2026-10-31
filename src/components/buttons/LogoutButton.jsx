"use client";

import { LogOut } from "lucide-react";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <button onClick={handleLogout}>
      <LogOut />
      Log out
    </button>
  );
}
