"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useAppContext } from "@/context/AppContext"; // ✅ import context
import "./ThemeToggle.css";

const ThemeToggle = () => {
  // 1️⃣ Access global theme state from context
  const { theme, setTheme } = useAppContext();

  // 2️⃣ Toggle theme function
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // 3️⃣ Render button with icons
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`} // apply theme class for CSS styling
    >
      <span className="icon sun">
        <SunIcon className="w-4 h-4" />
      </span>
      <span className="icon moon">
        <MoonIcon className="w-4 h-4" />
      </span>
      <span className="dot" />
    </button>
  );
};

export default ThemeToggle;
