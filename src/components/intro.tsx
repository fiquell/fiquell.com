import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Stripline from "~/components/ui/stripline";
import { bebasneue } from "~/constants/fonts";
import { developer, end, front } from "~/constants/intro";
import anima from "~/utils/anima";

const Intro = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frontendRef = useRef<HTMLDivElement | null>(null);
  const developerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      anima(frontendRef.current, 0.5, 100);
      anima(developerRef.current, 0.7, 100);
      anima(contentRef.current, 0.9, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container my-10 lg:my-20">
      <div
        className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasneue.className}`}>
        <div
          ref={frontendRef}
          className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-16">
          <div className="flex">
            {front.map(({ text }, index) => (
              <p key={index} className="transition-slide-up hover:text-text">
                {text}
              </p>
            ))}
          </div>
          <Stripline className="hidden md:block" />
          <div className="flex items-center gap-4">
            <Stripline className="block md:hidden" />
            <div className="mr-2.5 flex lg:mr-5">
              {end.map(({ text }, index) => (
                <p key={index} className="transition-slide-up hover:text-text">
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
          <div ref={developerRef} className="flex flex-wrap">
            {developer.map(({ text }, index) => (
              <p key={index} className="transition-slide-up hover:text-text">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div
          ref={contentRef}
          className="md:mt-8 md:w-1/4 md:text-xs lg:mb-16 lg:text-base">
          <div className="mb-10 flex justify-end">
            <p className="w-3/4 md:w-full">
              <span className="text-sm font-medium text-accent md:text-[10px] md:leading-normal lg:text-sm">
                ABOUT &nbsp;
              </span>
              I specialize in creating engaging and captivating digital
              experiences on the internet. My unique combination of creativity
              and technical skills allows me to craft interactive and
              captivating websites that engage and delight users, taking them on
              an exciting online journey.
            </p>
          </div>
          <div className="flex items-center justify-between text-accent">
            <p>Scroll down</p>
            <Icon
              icon="majesticons:arrow-down"
              className="animate-bounce text-2xl md:text-sm lg:text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
