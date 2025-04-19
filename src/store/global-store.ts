import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalStore {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

export const useGlobalStore = create<GlobalStore>()(
    persist(
        (set) => ({
            theme: "dark",
            setTheme: (theme) => set({ theme }),
        }),
        { name: "global-storage" }
    )
);
