import { gsap } from "gsap";

const anima = (
  targets: gsap.TweenTarget,
  delay: gsap.TweenValue,
  yPercent: gsap.TweenValue,
) => {
  gsap.from(targets, {
    delay,
    duration: 1,
    ease: "power4.out",
    opacity: 0,
    yPercent,
  });
};

export default anima;
