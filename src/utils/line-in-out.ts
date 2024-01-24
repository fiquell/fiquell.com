import { gsap } from "gsap";

export const lineInOut = (
  targets: gsap.TweenTarget,
  xPercent: gsap.TweenValue,
  trigger: gsap.DOMTarget,
) => {
  gsap.from(targets, {
    opacity: 0,
    xPercent,
    scrollTrigger: { trigger, start: "top 80%", end: "bottom 80%", scrub: 1 },
  });
};
