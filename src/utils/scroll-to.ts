import { Expo, gsap } from "gsap";

export const scrollTo = (id: number | string | Element) => {
  gsap.to(window, {
    duration: 1.25,
    ease: Expo.easeOut,
    scrollTo: { y: id, autoKill: true },
  });
};
