import type { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-full border-2 border-text px-4 py-2 text-sm font-medium text-text md:text-xs lg:text-sm ${
        className ?? ""
      }`}
    />
  );
};

export default Button;
