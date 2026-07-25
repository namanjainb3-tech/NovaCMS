import { useEffect } from "react";
import { useCMS } from "./CMSContext";

const hoverMap = {
  "#7C3AED": "#8B5CF6",
  "#2563EB": "#3B82F6",
  "#059669": "#10B981",
  "#EA580C": "#F97316",
  "#E11D48": "#F43F5E",
  "#475569": "#64748B",
};

const radiusMap = {
  Small: "12px",
  Medium: "16px",
  Large: "24px",
  ExtraLarge: "32px",
};

const textOnAccentMap = {
  "#ffffff": "#000000",
};

const fontMap = {
  Inter: '"Inter", sans-serif',
  Manrope: '"Manrope", sans-serif',
  Poppins: '"Poppins", sans-serif',
  Outfit: '"Outfit", sans-serif',
  "Plus Jakarta Sans": '"Plus Jakarta Sans", sans-serif',
  "DM Sans": '"DM Sans", sans-serif',
  Geist: '"Geist", sans-serif',
};

export default function ThemeProvider({ children }) {
  const { getSection } = useCMS();

  const theme = getSection("theme");

  useEffect(() => {
    const root = document.documentElement;

    const accent = theme?.accent || "#7C3AED";

    root.style.setProperty("--accent", accent);

    root.style.setProperty(
      "--accent-hover",
      hoverMap[accent] || "#8B5CF6"
    );

    root.style.setProperty(
      "--background",
      theme?.background || "#020617"
    );

    root.style.setProperty(
      "--font-family",
      fontMap[theme?.font] || '"Inter", sans-serif'
    );

    root.style.setProperty(
      "--radius",
      radiusMap[theme?.radius] || "24px"
    );

    root.style.setProperty(
      "--text-on-accent",
      textOnAccentMap[accent] || "#ffffff"
    );

    // Derived accent variables
    root.style.setProperty("--accent-soft", `${accent}1A`);
    root.style.setProperty("--accent-soft-2", `${accent}33`);
    root.style.setProperty("--accent-border", `${accent}55`);
    root.style.setProperty("--accent-glow", `${accent}66`);
  }, [theme]);

  return children;
}