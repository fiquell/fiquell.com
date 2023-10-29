import Link from "next/link";
import { bebasneue } from "~/constants/fonts";

const Contact = () => {
  return (
    <section className="mt-10 space-y-10">
      <p>
        If you have any questions, interesting proposals or projects, or if you
        are interested in collaborating on something, do not hesitate to contact
        me. I am always open to new opportunities and excited to explore
        potential partnerships.
      </p>
      <div>
        <div className="h-0.5 w-full bg-accent" />
        <p
          className={`py-4 text-7xl leading-none tracking-tighter text-accent lg:text-[11rem] ${bebasneue.className}`}>
          LET&rsquo;S TALK &mdash; LET&rsquo;S COLLABORATE &mdash; SAY HELLO
          &mdash; WANNA BE STARTING SOMETHING?
        </p>
        <div className="h-0.5 w-full bg-accent" />
      </div>
      <Link
        href="mailto:hello@fiquell.com"
        className="block text-center text-lg">
        hello@fiquell.com
      </Link>
    </section>
  );
};

export default Contact;
