import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { bebasneue } from "~/constants/fonts";
import streak from "~/utils/streak";

const Contact = () => {
  const [marqueeTween, setMarqueeTween] = useState<gsap.core.Tween>();

  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const lineUpRef = useRef<HTMLDivElement | null>(null);
  const lineDownRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLParagraphElement | null>(null);
  const copyTextRef = useRef<HTMLParagraphElement | null>(null);

  const copyText = () => {
    if (emailRef.current) {
      void navigator.clipboard.writeText(emailRef.current.textContent ?? "");

      if (copyTextRef.current) {
        copyTextRef.current.textContent = "COPIED";

        setTimeout(() => {
          if (copyTextRef.current) {
            copyTextRef.current.textContent = "CLICK TO COPY";
          }
        }, 2000);
      }
    }
  };

  const onMouseEnter = () => {
    gsap.fromTo(
      copyTextRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        display: "block",
        ease: "expo.inOut",
        opacity: 1,
        y: 0,
      },
    );
  };

  const onMouseLeave = () => {
    gsap.to(copyTextRef.current, {
      ease: "expo.inOut",
      opacity: 0,
      y: 10,
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        marqueeRef.current.append(marqueeRef.current.cloneNode(true));

        setMarqueeTween(
          gsap.to(marqueeRef.current, {
            duration: (marqueeRef.current.scrollWidth / 100) * 1,
            ease: "none",
            repeat: -1,
            x: -marqueeRef.current.scrollWidth,
          }),
        );
      }

      streak(lineUpRef.current, sectionRef.current, -100);
      streak(lineDownRef.current, sectionRef.current, 100);

      onMouseEnter();
      onMouseLeave();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="my-20 space-y-10 lg:my-40 lg:space-y-20">
      <div className="container">
        <p className="md:mx-auto md:w-1/2 md:text-center md:text-xs lg:text-base">
          If you have any questions, interesting proposals or projects, or if
          you are interested in collaborating on something, do not hesitate to
          contact me. I am always open to new opportunities and excited to
          explore potential partnerships.
        </p>
      </div>
      <div className="overflow-hidden">
        <div ref={lineUpRef} className="mx-auto h-0.5 w-11/12 bg-accent" />
        <div
          className={`my-8 text-9xl leading-none tracking-tighter text-accent lg:text-[13rem] ${bebasneue.className}`}>
          <div className="transition-slide-up hover:text-primary">
            <div
              ref={marqueeRef}
              data-cursor-size={150}
              data-cursor-text="SAY HELLO"
              onMouseEnter={() => marqueeTween?.pause()}
              onMouseLeave={() => marqueeTween?.play()}
              className="flex items-center gap-3">
              <Link
                href="mailto:fiquellh@gmail.com"
                className="whitespace-nowrap">
                LET&rsquo;S TALK &mdash; LET&rsquo;S COLLABORATE &mdash; SAY
                HELLO &mdash; WANNA BE STARTING SOMETHING?
              </Link>
            </div>
          </div>
        </div>
        <div ref={lineDownRef} className="mx-auto h-0.5 w-11/12 bg-accent" />
      </div>
      <div className="relative flex flex-col items-center">
        <p
          ref={emailRef}
          onClick={copyText}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="transition-slide-up cursor-pointer text-lg hover:text-primary hover:scale-110 lg:text-2xl">
          fiquellh@gmail.com
        </p>
        <p
          ref={copyTextRef}
          className="absolute mt-8 hidden rounded-full border-2 border-text px-5 py-2.5 text-sm font-medium md:text-xs lg:mt-10 lg:text-sm">
          CLICK TO COPY
        </p>
      </div>
    </section>
  );
};

export default Contact;
