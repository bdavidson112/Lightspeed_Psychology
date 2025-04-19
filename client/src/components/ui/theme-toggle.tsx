import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800"
    >
      <span className="dark:hidden">
        <i className="fas fa-moon"></i>
        <span className="sr-only">Switch to dark mode</span>
      </span>
      <span className="hidden dark:inline">
        <i className="fas fa-sun"></i>
        <span className="sr-only">Switch to light mode</span>
      </span>
    </Button>
  );
}
