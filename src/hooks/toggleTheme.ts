export default function ToggleTheme({
  resolvedTheme,
  setTheme,
}: {
  resolvedTheme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  const root = document.documentElement;
  setTheme(resolvedTheme === "light" ? "dark" : "light");
  // add data-theme attribute to html
  switch (resolvedTheme) {
    case "light":
      root.setAttribute("data-theme", "dark");
      break;
    case "dark":
      root.setAttribute("data-theme", "light");
      break;
    default:
      root.setAttribute("data-theme", "light");
      break;
  }
}
