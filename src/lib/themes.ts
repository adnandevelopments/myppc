/** Global theme presets — change DEFAULT_THEME or use the header picker. */
export const THEME_STORAGE_KEY = "myppc-theme";

export const themes = [
  {
    id: "cobalt",
    label: "Cobalt",
    description: "Sapphire on deep navy",
    swatch: "#4f7cff",
  },
  {
    id: "forest",
    label: "Forest",
    description: "Jade on moss green",
    swatch: "#1ec9a2",
  },
  {
    id: "ember",
    label: "Ember",
    description: "Copper on warm charcoal",
    swatch: "#f0752d",
  },
  {
    id: "ocean",
    label: "Ocean",
    description: "Aqua on midnight teal",
    swatch: "#2ad4ef",
  },
  {
    id: "rose",
    label: "Rose",
    description: "Coral on wine",
    swatch: "#e84b6a",
  },
  {
    id: "harbor",
    label: "Harbor",
    description: "Ice blue on slate",
    swatch: "#4cc3f5",
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const THEME_IDS = themes.map((t) => t.id);

/** Default site theme — change to any ThemeId */
export const DEFAULT_THEME: ThemeId = "cobalt";

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return themes.some((t) => t.id === value);
}
