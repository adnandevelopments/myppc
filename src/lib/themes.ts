/** Site theme — Azure palette. */
export const THEME_STORAGE_KEY = "medvicare-theme";

export const themes = [
  {
    id: "azure",
    label: "Azure",
    description: "Royal blue on lavender",
    swatch: "#3D52A0",
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const THEME_IDS = themes.map((t) => t.id);

export const DEFAULT_THEME: ThemeId = "azure";

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return themes.some((t) => t.id === value);
}
