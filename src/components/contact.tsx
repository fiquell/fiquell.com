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

  useEffect(() => {
    const ctx = gsap.context(() => {
      marqueeRef.current!.append(marqueeRef.current!.cloneNode(true));

      const tween = gsap.to(marqueeRef.current, {
        duration: 100,
        ease: "none",
        repeat: -1,
        x: -marqueeRef.current!.scrollWidth,
      });

      setMarqueeTween(tween);

      streak(lineUpRef.current, sectionRef.current, -100);
      streak(lineDownRef.current, sectionRef.current, 100);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mt-10 space-y-10 lg:mt-20 lg:space-y-20">
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
          className={`py-8 text-8xl leading-none tracking-tighter text-accent lg:text-[11rem] ${bebasneue.className}`}>
          <div className="transition duration-700 ease-in-out hover:text-primary">
            <div
              ref={marqueeRef}
              onMouseEnter={() => marqueeTween!.pause()}
              onMouseLeave={() => marqueeTween!.play()}
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
      <p className="text-center text-lg lg:text-2xl">fiquellh@gmail.com</p>
    </section>
  );
};

export default Contact;
