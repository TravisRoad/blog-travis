import { create } from "zustand";

declare type Theme = "light" | "dark";

type DarkModeState = {
  theme: Theme;
  toggle: () => void;
  setTheme: (theme: Theme) => void;
  callBack: (theme: Theme) => void;
};

const useDarkMode = create<DarkModeState>((set) => ({
  theme: "light",
  toggle: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.callBack(newTheme);
      return {
        theme: newTheme,
      };
    });
  },
  setTheme: (theme: Theme) => {
    set((state) => {
      state.callBack(theme);
      return { theme };
    });
  },
  callBack: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  },
}));

export default useDarkMode;
