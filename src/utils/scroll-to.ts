import { gsap } from "gsap";

export const scrollTo = (id: number | string | Element) => {
  gsap.to(window, {
    duration: 1.5,
    ease: "expo.out",
    scrollTo: {
      autoKill: true,
      offsetY: 50,
      y: id,
    },
  });
};
