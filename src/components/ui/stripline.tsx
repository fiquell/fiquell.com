import type { FC, HTMLAttributes } from "react";

const Stripline: FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      className={`transition-slide-up mb-4 h-4 w-full rounded-full bg-accent hover:bg-text lg:mb-9 lg:h-9 ${
        className ?? ""
      }`}
    />
  );
};

export default Stripline;
