import { Expo, gsap } from "gsap";
import Link from "next/link";
import { useRef, useState, type ElementRef } from "react";
import { bebasneue } from "~/constants";
import { useIsomorphic } from "~/hooks";
import { lineInOut } from "~/utils";

const Contact = () => {
  const [marqueeTween, setMarqueeTween] = useState<gsap.core.Tween>();

  const containerRef = useRef<ElementRef<"section">>(null);
  const lineUpRef = useRef<ElementRef<"div">>(null);
  const marqueeRef = useRef<ElementRef<"div">>(null);
  const lineDownRef = useRef<ElementRef<"div">>(null);
  const emailRef = useRef<ElementRef<"p">>(null);
  const tooltipRef = useRef<ElementRef<"p">>(null);

  const handleCopyToClipboard = () => {
    if (emailRef.current) {
      void navigator.clipboard.writeText(emailRef.current.textContent ?? "");
      if (tooltipRef.current) {
        tooltipRef.current.textContent = "COPIED";
        setTimeout(() => {
          if (tooltipRef.current) {
            tooltipRef.current.textContent = "CLICK TO COPY";
          }
        }, 2000);
      }
    }
  };

  const onMouseEnter = () => {
    gsap.fromTo(
      tooltipRef.current,
      { opacity: 0, y: 10 },
      { display: "block", ease: Expo.easeInOut, opacity: 1, y: 0 },
    );
  };

  const onMouseLeave = () => {
    gsap.to(tooltipRef.current, { ease: Expo.easeInOut, opacity: 0, y: 10 });
  };

  useIsomorphic(() => {
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

      lineInOut(lineUpRef.current, -100, containerRef.current);
      lineInOut(lineDownRef.current, 100, containerRef.current);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
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
        <div
          ref={lineUpRef}
          className="mx-auto h-0.5 w-11/12 rounded-full bg-accent"
        />
        <div
          className={`my-8 text-[9rem] leading-none tracking-tighter text-accent lg:text-[14rem] 2xl:text-[16rem] ${bebasneue.className}`}>
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
        <div
          ref={lineDownRef}
          className="mx-auto h-0.5 w-11/12 rounded-full bg-accent"
        />
      </div>
      <div className="relative flex flex-col items-center">
        <p
          ref={emailRef}
          onClick={handleCopyToClipboard}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="transition-slide-up cursor-pointer text-lg hover:text-primary hover:scale-110 lg:text-xl 2xl:text-2xl">
          fiquellh@gmail.com
        </p>
        <p
          ref={tooltipRef}
          className="absolute mt-8 hidden rounded-full border-2 border-text px-5 py-2.5 text-sm font-medium md:text-xs lg:mt-10 lg:text-sm">
          CLICK TO COPY
        </p>
      </div>
    </section>
  );
};

export default Contact;
