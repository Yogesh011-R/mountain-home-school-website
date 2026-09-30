// Date rendering: `timeZone` (IANA, e.g. Asia/Kolkata) and `dateFormat` (token
// string in the style `MMMM d, yyyy` → `January 23, 2026`). Both come from the
// constants below and render Indian dates by default.

export const DEFAULT_TIMEZONE = "Asia/Kolkata";
export const DEFAULT_DATE_FORMAT = "dd/MM/yyyy";

export interface DateSettings {
	/** IANA timezone used for every date on the site. */
	timeZone: string;
	/** Token string as entered in the CMS, e.g. `dd/MM/yyyy`. */
	dateFormat: string;
}

/** The site's timezone and date format. */
export function getDateSettings(): DateSettings {
	return { timeZone: DEFAULT_TIMEZONE, dateFormat: DEFAULT_DATE_FORMAT };
}

/**
 * Token string, in the style the CMS "Reading" panel documents
 * (`MMMM d, yyyy` → `January 23, 2026`):
 *
 * - year      `yyyy` `YYYY` `yy`
 * - month     `MMMM` `MMM` `MM` `M`
 * - day       `dd` `DD` `d` `D`
 * - weekday   `dddd` `ddd`
 * - time      `HH` `H` `hh` `h` `mm` `m` `ss` `s` `SSS` `A` `a`
 * - literal   `[...]`
 *
 * Longest tokens first so `dd` is not read as `d` + `d`.
 */
const TOKEN = /\[([^\]]*)\]|YYYY|yyyy|YY|yy|MMMM|MMM|MM|M|dddd|ddd|dd|DD|d|D|HH|H|hh|h|mm|m|ss|s|SSS|A|a/g;

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatterCache = new Map<string, Intl.DateTimeFormat>();

function formatter(timeZone: string, options: Intl.DateTimeFormatOptions) {
	const key = `${timeZone}|${JSON.stringify(options)}`;
	let f = formatterCache.get(key);
	if (!f) {
		f = new Intl.DateTimeFormat("en-US", { timeZone, ...options });
		formatterCache.set(key, f);
	}
	return f;
}

const pad = (n: number, length = 2) => String(n).padStart(length, "0");

interface ZonedParts {
	year: number;
	month: number;
	day: number;
	weekday: number;
	hour: number;
	minute: number;
	second: number;
	monthLong: string;
	monthShort: string;
	weekdayLong: string;
}

function zonedParts(date: Date, timeZone: string): ZonedParts {
	const numeric = formatter(timeZone, {
		hourCycle: "h23",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}).formatToParts(date);
	const get = (type: Intl.DateTimeFormatPartTypes) => numeric.find((p) => p.type === type)?.value ?? "";
	const names = formatter(timeZone, { month: "long", weekday: "long" }).formatToParts(date);
	const name = (type: Intl.DateTimeFormatPartTypes) => names.find((p) => p.type === type)?.value ?? "";
	return {
		year: Number(get("year")),
		month: Number(get("month")),
		day: Number(get("day")),
		weekday: Math.max(WEEKDAYS.indexOf(get("weekday")), 0),
		hour: Number(get("hour")) % 24,
		minute: Number(get("minute")),
		second: Number(get("second")),
		monthLong: name("month"),
		monthShort: name("month").slice(0, 3),
		weekdayLong: name("weekday"),
	};
}

function tokenValue(token: string, p: ZonedParts, date: Date): string {
	const hour12 = p.hour % 12 || 12;
	switch (token) {
		case "YYYY":
		case "yyyy":
			return pad(p.year, 4);
		case "YY":
		case "yy":
			return pad(p.year % 100);
		case "MMMM":
			return p.monthLong;
		case "MMM":
			return p.monthShort;
		case "MM":
			return pad(p.month);
		case "M":
			return String(p.month);
		case "DD":
		case "dd":
			return pad(p.day);
		case "D":
		case "d":
			return String(p.day);
		case "dddd":
			return p.weekdayLong;
		case "ddd":
			return WEEKDAYS[p.weekday];
		case "HH":
			return pad(p.hour);
		case "H":
			return String(p.hour);
		case "hh":
			return pad(hour12);
		case "h":
			return String(hour12);
		case "mm":
			return pad(p.minute);
		case "m":
			return String(p.minute);
		case "ss":
			return pad(p.second);
		case "s":
			return String(p.second);
		case "SSS":
			return pad(date.getMilliseconds(), 3);
		case "A":
			return p.hour < 12 ? "AM" : "PM";
		case "a":
			return p.hour < 12 ? "am" : "pm";
	}
	return token;
}

/** Format a date with the site's timezone and date-format tokens. */
export function formatDate(
	value: Date | string | number | null | undefined,
	{ timeZone, dateFormat }: DateSettings,
): string | null {
	if (!value) return null;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return null;
	const parts = zonedParts(date, timeZone);
	return dateFormat.replace(TOKEN, (match, literal: string | undefined) =>
		literal === undefined ? tokenValue(match, parts, date) : literal,
	);
}

/** `YYYY-MM-DD` in the site timezone — for sorting and day-level comparisons. */
export function isoDay(value: Date | string | number, timeZone: string): string {
	return new Intl.DateTimeFormat("en-CA", { timeZone }).format(new Date(value));
}

/** Day number and short month for the date badge, or null when there is no date. */
export function dateBadge(value: Date | string | null | undefined, timeZone: string) {
	if (!value) return null;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return null;
	const parts = zonedParts(date, timeZone);
	return { day: pad(parts.day), month: parts.monthShort.toUpperCase() };
}
