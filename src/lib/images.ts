// Typed registry for the site's own images.
//
// The originals live in src/assets/ so Vite can fingerprint and measure them, which
// is what lets <Image> from astro:assets emit real width/height, a responsive
// `sizes` set and an optimised format instead of shipping the raw file.
//
// CMS entries (news `featured_image`, gallery `image`) are different: they arrive as
// absolute R2 URLs at runtime, so they cannot be imported here. PhotoFrame and
// PageHero accept either shape and fall back to a plain <img> for the remote case —
// see `resolveImage` below.

import type { ImageMetadata } from "astro";

import archiveHall from "../assets/images/archive-hall.jpg";
import computerLab from "../assets/images/computer-lab.jpg";
import contours from "../assets/images/contours.svg";
import crest from "../assets/images/crest.png";
import heroCampus from "../assets/images/hero-campus.jpg";
import hostelBlock from "../assets/images/hostel-block.jpg";
import investiture from "../assets/images/investiture.jpg";
import schoolCouncil from "../assets/images/school-council.jpg";
import sportsDay from "../assets/images/sports-day.jpg";

/** Every local image, keyed by the path it used to be served from in /public. */
export const IMAGES = {
	"/images/archive-hall.jpg": archiveHall,
	"/images/computer-lab.jpg": computerLab,
	"/images/contours.svg": contours,
	"/images/crest.png": crest,
	"/images/hero-campus.jpg": heroCampus,
	"/images/hostel-block.jpg": hostelBlock,
	"/images/investiture.jpg": investiture,
	"/images/school-council.jpg": schoolCouncil,
	"/images/sports-day.jpg": sportsDay,
} as const satisfies Record<string, ImageMetadata>;

export type LocalImagePath = keyof typeof IMAGES;

export interface ResolvedImage {
	/** Imported metadata, when `src` is a bundled local image. */
	local: ImageMetadata | null;
	/** The value to put in the `src` attribute either way. */
	src: string;
}

/**
 * Resolve an image reference against the local registry.
 *
 * Returns `local: null` for CMS/R2 URLs and for any path we do not bundle, so callers
 * can render a plain <img> rather than passing a string to <Image> (which would throw).
 */
export function resolveImage(src: string | null | undefined): ResolvedImage {
	if (!src) return { local: null, src: "" };
	const local = IMAGES[src as LocalImagePath];
	return { local: local ?? null, src: local ? local.src : src };
}
