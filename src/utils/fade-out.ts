import { Expo, gsap } from "gsap";

export const fadeOut = (
  targets: gsap.TweenTarget,
  delay: gsap.TweenValue,
  yPercent: gsap.TweenValue,
) => {
  gsap.from(targets, {
    delay,
    duration: 1.25,
    ease: Expo.easeOut,
    opacity: 0,
    yPercent,
  });
};
