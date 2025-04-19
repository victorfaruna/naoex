// components/ThemeProvider.tsx
"use client";

import { useEffect } from "react";
import { useGlobalStore } from "@/store/global-store";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useGlobalStore();

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    return <>{children}</>;
}
