import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  accesToken: null,

  setAuth: (user, accesToken) => set({ user, accesToken }),

  logout: () => set({ user: null, accesToken: null }),
}));
