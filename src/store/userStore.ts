// src/store/userStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "@supabase/supabase-js";
import { supabase } from "../services/supabaseClient";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  signOut: () => Promise<void>;
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),

      signOut: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      },
    }),
    { name: "UserStore" } // Optional: Name for the devtools instance
  )
);

// Listen to auth state changes
supabase.auth.onAuthStateChange((_event, session) => {
  useUserStore.getState().setUser(session?.user ?? null);
});
