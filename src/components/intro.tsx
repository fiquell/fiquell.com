import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { Stripes } from "~/components/ui";
import { bebasneue, developer, end, front } from "~/constants";
import { useIsomorphic } from "~/hooks";
import { fadeOut } from "~/utils";

const Intro = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frontendRef = useRef<HTMLDivElement | null>(null);
  const developerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useIsomorphic(() => {
    const ctx = gsap.context(() => {
      fadeOut(frontendRef.current, 0.5, 100);
      fadeOut(developerRef.current, 0.7, 100);
      fadeOut(aboutRef.current, 0.9, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container my-10">
      <div
        className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasneue.className}`}>
        <div
          ref={frontendRef}
          className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-16">
          <div data-cursor-size={150} className="flex">
            {front.map(({ text }, index) => (
              <p
                key={index}
                data-cursor-text="FRONT"
                className="transition-slide-up hover:text-text">
                {text}
              </p>
            ))}
          </div>
          <Stripes className="hidden md:block" />
          <div className="flex items-center gap-4">
            <Stripes className="block md:hidden" />
            <div data-cursor-size={150} className="mr-2.5 flex lg:mr-5">
              {end.map(({ text }, index) => (
                <p
                  key={index}
                  data-cursor-text="END"
                  className="transition-slide-up hover:text-text">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:-mt-10 md:flex-row md:items-center lg:gap-10">
        <div
          className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasneue.className}`}>
          <div
            ref={developerRef}
            data-cursor-size={150}
            className="flex flex-wrap">
            {developer.map(({ text }, index) => (
              <p
                key={index}
                data-cursor-text="DEVELOPER"
                className="transition-slide-up hover:text-text">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div
          ref={aboutRef}
          className="md:mt-8 md:w-1/4 md:text-xs lg:mb-16 lg:text-base">
          <div className="mb-10 flex justify-end">
            <p className="w-3/4 md:w-full">
              <span className="text-sm font-medium md:text-[10px] md:leading-normal lg:text-sm">
                ABOUT &nbsp;
              </span>
              I specialize in creating engaging and captivating digital
              experiences on the internet. My unique combination of creativity
              and technical skills allows me to craft interactive and
              captivating websites that engage and delight users, taking them on
              an exciting online journey.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Scroll down</p>
            <Icon
              icon="eva:arrowhead-down-fill"
              className="animate-bounce text-xl md:text-base lg:text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
