// Helpers for News & Events entries.
// Date/timezone concerns live in `dates.ts`.

export const CATEGORY_LABELS: Record<string, string> = {
	ceremony: "Ceremony",
	sports: "Sports",
	academics: "Academics",
	cultural: "Cultural",
	alumni: "Alumni",
	admissions: "Admissions",
	notice: "Notice",
};

/** Local photos used until the office uploads a photo for the item. */
const FALLBACK_IMAGES: Record<string, { src: string; alt: string }> = {
	ceremony: { src: "/images/school-council.jpg", alt: "The school council in navy blazers gathered on stage with the Principal" },
	sports: { src: "/images/sports-day.jpg", alt: "Students seated by house on the sports ground before the march past" },
};
const DEFAULT_FALLBACK = { src: "/images/hero-campus.jpg", alt: "The Mountain Home School campus among tall trees, Coonoor" };

interface ImageLike {
	src?: string;
	alt?: string;
}

export function newsImage(category: string, image?: ImageLike | null) {
	if (image?.src) return { src: image.src, alt: image.alt || "" };
	return FALLBACK_IMAGES[category] ?? DEFAULT_FALLBACK;
}

