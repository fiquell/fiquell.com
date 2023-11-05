import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { bebasneue } from "~/constants/fonts";

const Contact = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marqueeElement = marqueeRef.current;
      const marqueeWidth = marqueeElement!.scrollWidth;

      const marqueeClone = marqueeElement!.cloneNode(true);
      marqueeElement!.append(marqueeClone);

      gsap.fromTo(
        marqueeElement,
        {
          x: -200,
        },
        {
          x: -marqueeWidth - 200,
          duration: 40,
          ease: "none",
          repeat: -1,
        },
      );
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-10 space-y-10 lg:mt-20 lg:space-y-20">
      <div className="container">
        <p className="md:mx-auto md:w-1/2 md:text-center md:text-xs lg:text-base">
          If you have any questions, interesting proposals or projects, or if
          you are interested in collaborating on something, do not hesitate to
          contact me. I am always open to new opportunities and excited to
          explore potential partnerships.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto h-0.5 w-11/12 bg-accent" />
        <div
          className={`py-4 text-8xl leading-none tracking-tighter text-accent lg:text-[11rem] ${bebasneue.className}`}>
          <div ref={marqueeRef} className="flex items-center gap-3">
            <p className="whitespace-nowrap">
              LET&rsquo;S TALK &mdash; LET&rsquo;S COLLABORATE &mdash; SAY HELLO
              &mdash; WANNA BE STARTING SOMETHING?
            </p>
          </div>
        </div>
        <div className="mx-auto h-0.5 w-11/12 bg-accent" />
      </div>
      <Link
        href="mailto:fiquellh@gmail.com"
        className="block text-center text-lg md:text-base lg:text-lg">
        fiquellh@gmail.com
      </Link>
    </section>
  );
};

export default Contact;
