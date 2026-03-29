/**
 * Read a CSS custom property value from the document root.
 * Mapbox GL paint properties need actual color strings —
 * this bridges CSS variables to Mapbox layers.
 */
export function getCssVar(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
