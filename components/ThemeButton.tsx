import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useDarkMode from "@/lib/hooks/useDarkMode";

export const ThemeButton = () => {
  const { theme, toggle, setTheme } = useDarkMode();

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    const isDark =
      storage === "dark" || document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    toggle();
  };

  return (
    <div>
      <button
        onClick={onClick}
        className="transition-color mx-2 rounded-lg bg-transparent p-1 duration-500 hover:bg-nord-5 dark:hover:bg-nord-2"
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5 fill-nord-2 stroke-nord-2 dark:fill-nord-5 dark:stroke-nord-5" />
        ) : (
          <MoonIcon className="h-5 w-5 fill-nord-2 stroke-nord-2 dark:fill-nord-5 dark:stroke-nord-5" />
        )}
      </button>
    </div>
  );
};
