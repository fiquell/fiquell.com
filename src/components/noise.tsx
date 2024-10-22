import { cn } from "~/lib/utils";

const Noise = ({
  className,
  ...props
}: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      className={cn(
        "pointer-events-none fixed isolate z-50 opacity-50 mix-blend-soft-light",
        className,
      )}
      {...props}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
};

export default Noise;
