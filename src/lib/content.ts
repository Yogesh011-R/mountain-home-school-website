// Static site content, exported from the former CMS seed into src/data/*.json.
// Edit the JSON files to change copy; pages read them at build time.
import housesJson from "../data/houses.json";
import newsJson from "../data/news.json";
import timelineJson from "../data/timeline.json";

export interface House {
	slug: string;
	title: string;
	colour: string;
	colour_hex?: string | null;
	shape?: string;
	summary?: string;
	motto?: string;
	description?: string;
	history?: string;
	patron?: string;
	facts?: string;
	points?: number;
	sort_order?: number;
	[key: string]: unknown;
}

export interface NewsItem {
	slug: string;
	title: string;
	category: string;
	is_event: boolean;
	event_date?: string | null;
	excerpt?: string | null;
	featured_image?: { src?: string; alt?: string } | null;
	content?: string | null;
}

export interface TimelineItem {
	title: string;
	description: string;
	sort_order?: number;
}

export interface GalleryPhoto {
	slug: string;
	title: string;
	image?: { src?: string; alt?: string } | null;
	category: string;
	caption?: string;
}

export const houses = housesJson as House[];
export const news = newsJson as NewsItem[];
export const timeline = timelineJson as TimelineItem[];
/** No gallery photos have been uploaded yet. */
export const gallery: GalleryPhoto[] = [];
