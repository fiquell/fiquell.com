import { gsap } from "gsap";

const anima = (
  element: HTMLElement | null,
  delay: number | string,
  yPercent: number | string,
) => {
  gsap.from(element, {
    delay,
    duration: 1,
    ease: "power4.out",
    opacity: 0,
    yPercent,
  });
};

export default anima;
