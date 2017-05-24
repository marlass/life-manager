import chromeFavicon from "../images/chrome-ninja192-precomposed.png";
import appleFavicon from "../images/apple-ninja152-precomposed.png";
import msFavicon from "../images/ms-ninja144-precomposed.png";
import favicon from "../images/favicon.png";
import { isProduction } from "../../config/app";

const metaAssets = () => {
  return [
    { charset: "utf-8" },
    {
      name: "description",
      content: "Manage you most important tasks of your life",
    },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    // Disable tap highlight on IE
    { name: "msapplication-tap-highlight", content: "no" },
    // Add to homescreen for Chrome on Android
    { name: "mobile-web-app-capable", content: "yes" },
    // Add to homescreen for Safari on IOS
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "apple-mobile-web-app-title", content: "Life manager" },
    // Tile icon for Win8 (144x144 + tile color)
    { name: "msapplication-TileImage", content: msFavicon },
    { name: "msapplication-TileColor", content: "#3372DF" },
  ];
};

const linkAssets = () => {
  const links = [
    // Add to homescreen for Chrome on Android
    { rel: "icon", href: favicon },
    { rel: "icon", sizes: "192x192", href: chromeFavicon },
    // Add to homescreen for Safari on IOS
    { rel: "apple-touch-icon", sizes: "152x152", href: appleFavicon },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto+Condensed",
      type: "text/css",
    },
    { rel: "stylesheet", href: "/assets/styles/main.css" }
  ];
  return isProduction ? links : links.filter(l => l.rel !== "stylesheet");
};

export const title = "Life manager - control your life";
export const meta = metaAssets();
export const link = linkAssets();
