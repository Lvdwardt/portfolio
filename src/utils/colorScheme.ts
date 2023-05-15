import { getCookie, setCookie } from "cookies-next";

export const getCurrentScheme = async () => {
  // The `getCookie` function is not available on the server, imagine that
  // we have to access the scheme while Next.js is rendering the `<RootLayout />`
  // component (this happens server side). We can use the `cookies` function
  // from the `next/headers` package to access the cookies from the request headers.
  if (typeof window === "undefined") {
    return import("next/headers").then(({ cookies }) => {
      return cookies().has("scheme") ? cookies().get("scheme")?.value : "dark";
    });
  }

  return getCookie("scheme", { path: "/" });
};

export const toggleScheme = async () => {
  const scheme = await getCurrentScheme();

  const newScheme = scheme === "light" ? "dark" : "light";

  setCookie("scheme", newScheme, {
    path: "/",
  });

  return newScheme;
};
