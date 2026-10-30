import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Stores the logged-in user and token.
 * Saved in localStorage under "holidaze-auth-storage",
 * so the user stays logged in after refresh.
 *
 * @property {Object|null} user - The logged-in user, or null if logged out.
 * @property {string|null} accessToken - The user's API access token.
 * @property {(user: Object, accessToken: string) => void} setAuth - Saves the user and token after login.
 * @property {() => void} logout - Clears the user and token.
 *
 * @example
 * // Get the user
 * const user = useAuthStore((state) => state.user);
 *
 * @example
 * // Logout button
 * const logout = useAuthStore((state) => state.logout);
 * <button onClick={logout}>Logg ut</button>
 */

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      setAuth: (user, accessToken) => set({ user, accessToken }),

      logout: () => set({ user: null, accessToken: null }),
    }),
    {
      name: "holidaze-auth-storage",
    },
  ),
);

export default useAuthStore;
