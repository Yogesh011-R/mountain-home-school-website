export const SCHOOL = {
	name: "Mountain Home School",
	fullName: "Mountain Home School & Junior College",
	place: "Coonoor",
	established: 1911,
	motto: "Knowledge Is Power",
	tagline: "Not Just a School, But a Sacred Trust",
	address: ["P.O. Box No. 4, Coonoor", "The Nilgiris, Tamil Nadu 643 102", "India"],
} as const;

export const NAV = [
	{ label: "Our Story", href: "/our-story" },
	{ label: "Academics", href: "/academics" },
	{ label: "Life at Mountain Home", href: "/life" },
	{ label: "Houses", href: "/houses" },
	{ label: "Admissions", href: "/admissions" },
	{ label: "Alumni", href: "/alumni" },
	{ label: "News", href: "/news" },
	{ label: "Contact", href: "/contact" },
] as const;

export const FOOTER_EXPLORE = [
	{ label: "Our Story", href: "/our-story" },
	{ label: "Academics", href: "/academics" },
	{ label: "Life at Mountain Home", href: "/life" },
	{ label: "Houses", href: "/houses" },
	{ label: "Uniform", href: "/uniform" },
	{ label: "News & Gallery", href: "/news" },
] as const;

export const FOOTER_ALUMNI = [
	{ label: "Come Home", href: "/alumni" },
	{ label: "Find your batch", href: "/alumni#directory" },
	{ label: "Memory wall", href: "/alumni#memories" },
	{ label: "Give back", href: "/alumni#give" },
	{ label: "Remembering", href: "/remembering" },
] as const;
