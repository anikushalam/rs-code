import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import tinycolor from "tinycolor2";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const convertToSlug = (str: string) => {
  // Replace spaces with hyphens and convert to lowercase
  return str.replace(/\s+/g, "-").toLowerCase();
};
export const convertHsl = (hsl: string) => {
  // Remove the "hsl(" prefix and ")" suffix
  const hslValues = hsl.slice(4, -1);
  return hslValues.trim();
};
export const adjustColors = (baseColor: string) => {
  const root = document.documentElement;
  const isDark = tinycolor(baseColor).isDark();
  const colorMappings = {
    "--background": tinycolor(baseColor).lighten(10).toHslString(),
    "--foreground": isDark
      ? tinycolor("#fff").toHslString()
      : tinycolor("#333").toHslString(),
    "--card": tinycolor(baseColor).lighten(50).toHslString(),
    "--card-foreground": tinycolor(baseColor).darken(50).toHslString(),
    "--popover": tinycolor(baseColor).lighten(50).toHslString(),
    "--popover-foreground": tinycolor(baseColor).darken(50).toHslString(),
    "--primary": tinycolor(baseColor).darken(40).toHslString(),
    "--primary-foreground": tinycolor(baseColor).lighten(80).toHslString(),
    "--secondary": tinycolor(baseColor).lighten(80).toHslString(),
    "--secondary-foreground": tinycolor(baseColor).darken(40).toHslString(),
    "--muted": tinycolor(baseColor).lighten(80).toHslString(),
    "--muted-foreground": tinycolor(baseColor).darken(20).toHslString(),
    "--accent": tinycolor(baseColor).lighten(80).toHslString(),
    "--accent-foreground": tinycolor(baseColor).darken(40).toHslString(),
    "--destructive": tinycolor("red").lighten(10).toHslString(),
    "--destructive-foreground": tinycolor(baseColor).lighten(80).toHslString(),
    "--border": tinycolor(baseColor).lighten(70).toHslString(),
    "--input": tinycolor(baseColor).lighten(70).toHslString(),
    "--ring": tinycolor(baseColor).darken(50).toHslString(),
    "--chart-1": tinycolor(baseColor).spin(10).toHslString(),
    "--chart-2": tinycolor(baseColor).spin(-50).toHslString(),
    "--chart-3": tinycolor(baseColor).spin(-75).toHslString(),
    "--chart-4": tinycolor(baseColor).spin(80).toHslString(),
    "--chart-5": tinycolor(baseColor).spin(60).toHslString(),
  };

  for (const [key, value] of Object.entries(colorMappings)) {
    root.style.setProperty(key, convertHsl(value));
  }
};
export const getId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
export let imageExtension = [
  ".jpg",
  ".jpeg",
  ".jpe",
  ".pjpeg",
  ".pjp",
  ".apng",
  ".jif",
  ".jfif",
  ".jfi",
  ".png",
  ".gif",
  ".webp",
  ".tiff",
  ".tif",
  ".psd",
  ".heif",
  ".heic",
  ".svg",
  ".svgz",
  ".ai",
  ".eps",
  ".avif",
];

export const imageExtensionVerify = (args: string) => {
  let flag = false;
  for (let ob of imageExtension) {
    if (args?.includes(ob)) {
      flag = true;
      break;
    } else {
    }
  }

  return flag;
};
