import { gsap } from "gsap";

export const fadeOut = (
  targets: gsap.TweenTarget,
  delay: gsap.TweenValue,
  yPercent: gsap.TweenValue,
) => {
  gsap.from(targets, {
    delay,
    duration: 1,
    ease: "expo.out",
    opacity: 0,
    yPercent,
  });
};
