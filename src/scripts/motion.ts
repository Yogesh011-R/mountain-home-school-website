import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

// Scroll motion for the whole site, driven by data attributes so pages stay
// declarative. Kept deliberately quiet (DESIGN.md: "a single rising entrance"):
//   data-reveal            rises 18px and fades in, staggered with siblings
//                          that enter in the same moment (same easing as
//                          `animate-rise`).
//   data-parallax="0.15"   the element drifts by that fraction of its height
//                          as it crosses the viewport (scrubbed).
gsap.registerPlugin(ScrollTrigger);

export function initMotion(lenis: Lenis) {
	// One frame loop: Lenis drives ScrollTrigger, GSAP's ticker drives Lenis.
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]");
	if (reveal.length) {
		gsap.set(reveal, { opacity: 0, y: 18 });
		ScrollTrigger.batch(reveal, {
			start: "top 88%",
			once: true,
			onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.12, overwrite: true }),
		});
	}

	// Animate the child, never the trigger, so layout stays put.
	gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
		const amount = parseFloat(el.dataset.parallax ?? "0.15");
		gsap.fromTo(
			el,
			{ yPercent: -amount * 100 },
			{
				yPercent: amount * 100,
				ease: "none",
				scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
			},
		);
	});

	// Element already at the top of the page (the hero photo): starts at rest and
	// sinks by that fraction of its own height as the section scrolls away. Size
	// it taller than its parent by at least that much so no edge shows.
	gsap.utils.toArray<HTMLElement>("[data-parallax-hero]").forEach((el) => {
		gsap.to(el, {
			yPercent: parseFloat(el.dataset.parallaxHero ?? "0.08") * 100,
			ease: "none",
			scrollTrigger: { trigger: el.parentElement ?? el, start: "top top", end: "bottom top", scrub: true },
		});
	});

	// Timeline: the brass bar fills as the reader walks down (or across) it.
	const bar = document.querySelector<HTMLElement>("[data-timeline-fill]");
	if (bar) {
		const trigger = bar.parentElement!;
		const mm = gsap.matchMedia();
		mm.add("(min-width: 1024px)", () => {
			gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger, start: "top 70%", end: "bottom 60%", scrub: 0.6 } });
		});
		mm.add("(max-width: 1023px)", () => {
			gsap.fromTo(bar, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger, start: "top 70%", end: "bottom 60%", scrub: 0.6 } });
		});
	}
}
