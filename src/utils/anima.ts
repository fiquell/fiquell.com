import { gsap } from "gsap";

const anima = (element: HTMLDivElement | null, delay: number | string) => {
  gsap.from(element, {
    delay,
    duration: 0.5,
    ease: "power4.out",
    opacity: 0,
    yPercent: 100,
  });
};

export default anima;
