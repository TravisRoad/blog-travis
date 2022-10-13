import React, { useEffect, useState } from "react";

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("vidyaDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("vidyaDarkMode", "false");
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-lg py-2 px-2 mx-2 hover:ring-2 ring-red-600 hover:bg-white/5 text-gray-400 dark:text-gray-100"
      >
        {darkMode ? "明" : "暗"}
      </button>
    </div>
  );
};
