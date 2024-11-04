import { cn } from "~/lib/utils";

const DotPattern = ({
  className,
  ...props
}: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      className={cn(
        "pointer-events-none absolute fill-neutral-content",
        className,
      )}
      {...props}>
      <defs>
        <pattern
          id="pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          x="8"
          y="8">
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
};

export default DotPattern;
