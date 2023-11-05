import type { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-full border-2 border-text px-4 py-2 text-sm font-medium text-text md:text-xs lg:text-sm ${
        className ?? ""
      }`}>
      {children}
    </button>
  );
};

export default Button;
