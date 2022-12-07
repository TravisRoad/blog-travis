if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  console.log("darkmode set dark");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
  console.log("darkmode set light");
}
