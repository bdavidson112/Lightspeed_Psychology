import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextTheme();

  // Only show theme UI once mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    theme: resolvedTheme as string,
    setTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    toggleTheme: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
  };
}
