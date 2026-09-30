// Presentation helpers for houses. Names, colours and shapes come from the CMS
// "houses" collection; this file only maps them to CSS.
//
// A house carries two colour values. `colour` is the name (red, blue, green,
// yellow) shown to readers and used for the theme fallback. `colour_hex` is
// optional and set by editors in the CMS; when present it is the exact colour.

const houseTokens = {
	red: "#b3312e",
	blue: "#2f5fa8",
	green: "#2e7d45",
	yellow: "#e3b120",
} as const;

export type HouseColour = keyof typeof houseTokens;
export type HouseShape = "circle" | "diamond" | "square" | "triangle";

// The editor value reaches an inline style, so only hex is accepted. Three or
// six digits, nothing else -- a malformed or hostile value falls back instead.
const HEX = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

const houseHex = (hex: string | null | undefined) => {
	const value = hex?.trim();
	return value && HEX.test(value) ? value : undefined;
};

const tokenName = (colour: string): HouseColour =>
	colour in houseTokens ? (colour as HouseColour) : "red";

const houseToken = (colour: string) => houseTokens[tokenName(colour)];

/** CSS colour for a house: the CMS hex when one is set, otherwise the theme
 *  variable from global.css. */
export const houseColour = (colour: string, hex?: string | null) =>
	houseHex(hex) ?? `var(--color-house-${tokenName(colour)})`;

/** WCAG relative luminance, so a picked colour always gets readable text. */
const luminance = (hex: string) => {
	const full =
		hex.length === 4 ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex;
	const channel = (i: number) => {
		const c = Number.parseInt(full.slice(1 + i * 2, 3 + i * 2), 16) / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	};
	return 0.2126 * channel(0) + 0.7152 * channel(1) + 0.0722 * channel(2);
};

/** Text colour that stays readable on top of the house colour. */
export const houseOnColour = (colour: string, hex?: string | null) =>
	luminance(houseHex(hex) ?? houseToken(colour)) > 0.3 ? "var(--color-navy)" : "#ffffff";

export const houseInitial = (name: string) => name.trim().charAt(0).toUpperCase();

export const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The colour label shown to readers. Once an editor sets a hex, the dropdown's
 *  name no longer describes the flag, so the hex itself becomes the label. */
export const houseColourLabel = (colour: string, hex?: string | null) =>
	houseHex(hex)?.toUpperCase() ?? capitalise(colour);
