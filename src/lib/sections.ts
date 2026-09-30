// Page copy lives in src/data/sections.json: one object per page, keyed by section.
// Pages read a section by key: `const sec = await loadSections("academics"); sec("stages").heading`.
import sectionsJson from "../data/sections.json";

export interface SectionItem {
	title: string;
	subtitle: string;
	body: string;
	meta: string;
}

export interface Section {
	eyebrow: string;
	heading: string;
	accent: string;
	intro: string;
	body: string;
	note: string;
	items: SectionItem[];
}

const str = (v: unknown) => (typeof v === "string" ? v : "");

const toSection = (d: Record<string, unknown>): Section => ({
	eyebrow: str(d.eyebrow),
	heading: str(d.heading),
	accent: str(d.accent),
	intro: str(d.intro),
	body: str(d.body),
	note: str(d.note),
	items: (Array.isArray(d.items) ? d.items : []).map((i: Record<string, unknown>) => ({
		title: str(i.title),
		subtitle: str(i.subtitle),
		body: str(i.body),
		meta: str(i.meta),
	})),
});

const EMPTY: Section = { eyebrow: "", heading: "", accent: "", intro: "", body: "", note: "", items: [] };

const pages = sectionsJson as unknown as Record<string, Record<string, Record<string, unknown>>>;

/** Returns a reader for one page's sections. Async only so existing `await` call sites keep working. */
export async function loadSections(page: string, _Astro?: unknown) {
	const byKey = new Map<string, Section>();
	for (const [key, data] of Object.entries(pages[page] ?? {})) byKey.set(key, toSection(data));
	return (key: string): Section => byKey.get(key) ?? EMPTY;
}

/** Non-empty trimmed lines of a multi-line field. */
export const lines = (s: string) =>
	s
		.split("\n")
		.map((l) => l.trim())
		.filter(Boolean);

/** Paragraphs separated by a blank line. */
export const paras = (s: string) =>
	s
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter(Boolean);

/** "a | b | c" into ["a", "b", "c"]. */
export const cells = (s: string) => s.split("|").map((c) => c.trim());
