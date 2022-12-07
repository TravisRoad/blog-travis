import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    setDarkMode(
      storage === "dark" || document.documentElement.classList.contains("dark")
    );
  }, []);

  useEffect(() => {
    if (darkMode === true) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (darkMode === false) {
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
        className="transition-color mx-2 rounded-lg bg-transparent p-1 duration-500 hover:bg-nord-5 dark:hover:bg-nord-2"
      >
        {darkMode ? (
          <SunIcon className="h-5 w-5 fill-nord-2 stroke-nord-2 dark:fill-nord-5 dark:stroke-nord-5" />
        ) : (
          <MoonIcon className="h-5 w-5 fill-nord-2 stroke-nord-2 dark:fill-nord-5 dark:stroke-nord-5" />
        )}
      </button>
    </div>
  );
};
