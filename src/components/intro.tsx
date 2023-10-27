import { Icon } from "@iconify/react";
import Stripline from "~/components/stripline";
import { bebasNeue } from "~/constants/fonts";
import { developer, end, front } from "~/constants/intro";

const Intro = () => {
  return (
    <section className="my-10 lg:my-5">
      <div
        className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasNeue.className}`}>
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-16">
          <div className="flex">
            {front.map(({ id, text }) => (
              <p
                key={id}
                className="transition duration-300 ease-in-out hover:text-text">
                {text}
              </p>
            ))}
          </div>
          <Stripline className="hidden md:block" />
          <div className="flex items-center gap-4">
            <Stripline className="md:hidden" />
            <div className="mr-2.5 flex lg:mr-5">
              {end.map(({ id, text }) => (
                <p
                  key={id}
                  className="transition duration-300 ease-in-out hover:text-text">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:-mt-5 md:flex-row md:items-center lg:-mt-10 lg:gap-10">
        <div
          className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasNeue.className}`}>
          <div className="flex flex-wrap">
            {developer.map(({ id, text }) => (
              <p
                key={id}
                className="transition duration-300 ease-in-out hover:text-text">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="md:w-1/4 md:text-xs lg:mb-10 lg:text-base">
          <div className="mb-20 flex justify-end md:mb-5 lg:mb-20">
            <p className="w-3/4 md:w-full">
              <span className="mr-2 text-sm font-medium text-accent md:text-[10px] md:leading-normal lg:text-sm">
                ABOUT
              </span>
              I am a developer based in Indonesia specializing in crafting
              interactive digital experiences on the web. I collaborate with
              renowned brands and industry leaders to create engaging online
              experiences.
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
