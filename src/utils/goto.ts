import { gsap } from "gsap";

const goto = (id: string) => {
  gsap.to(window, {
    duration: 2,
    scrollTo: {
      y: `#${id}`,
      offsetY: 50,
      autoKill: true,
    },
  });
};

export default goto;
