import { Icon } from "@iconify/react";
import Stripline from "~/components/ui/stripline";
import { bebasneue } from "~/constants/fonts";
import { developer, end, front } from "~/constants/intro";

const Intro = () => {
  return (
    <section className="container mt-10">
      <div
        className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasneue.className}`}>
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
            <Stripline className="block md:hidden" />
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
      <div className="flex flex-col gap-5 md:-mt-10 md:flex-row md:items-center lg:gap-10">
        <div
          className={`text-[11rem] leading-none tracking-tighter text-accent lg:text-[22rem] ${bebasneue.className}`}>
          <div className="flex flex-wrap">
            {developer.map(({ id, text }) => (
              <p
                key={id}
                className="transition duration-300 ease-in-out hover:text-text">
                {text}
              </p>
            ))}
            <Stripline className="hidden h-1.5 rotate-3 md:block lg:hidden" />
          </div>
        </div>
        <div className="md:mt-8 md:w-1/4 md:text-xs lg:mb-16 lg:text-base">
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
