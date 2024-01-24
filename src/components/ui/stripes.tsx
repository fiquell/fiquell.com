const Stripes: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      data-cursor-size={150}
      data-cursor-text="..."
      className={`transition-slide-up mb-5 h-4 w-full rounded-full bg-accent hover:bg-text lg:mb-7 lg:h-6 2xl:mb-9 2xl:h-8 ${
        className ?? ""
      }`}
    />
  );
};

export default Stripes;
