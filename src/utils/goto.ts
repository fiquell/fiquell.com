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
    duration: 2,
    scrollTo: {
      y: `#${id}`,
      offsetY: 50,
      autoKill: true,
    },
  });
};

export default goto;
