import { gsap } from "gsap";

const streak = (
  targets: gsap.TweenTarget,
  trigger: gsap.DOMTarget,
  xPercent: gsap.TweenValue,
) => {
  gsap.from(targets, {
    opacity: 0,
    xPercent,
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
    },
  });
};

export default streak;
