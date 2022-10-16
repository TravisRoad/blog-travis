import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    setDarkMode(
      storage === "dark" || document.documentElement.classList.contains("dark")
    );
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-lg py-2 px-2 mx-2 hover:bg-white/5 text-gray-400 dark:text-gray-100"
      >
        {darkMode ? (
          <SunIcon className="w-4 h-4" />
        ) : (
          <MoonIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
