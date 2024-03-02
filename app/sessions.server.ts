import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["janjowenj2njo24n5425u092$"],
    ...(isProduction ? { domain: "electronic-dust.com", secure: true } : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
