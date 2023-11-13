import { gsap } from "gsap";

const goto = (
  options:
    | string
    | {
        id: string;
      },
) => {
  const id = typeof options === "string" ? options : options.id;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      autoKill: true,
      offsetY: 50,
      y: `#${id}`,
    },
  });
};

export default goto;
