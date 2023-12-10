const Stripes: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      {...props}
      data-cursor-size={150}
      data-cursor-text="..."
      className={`transition-slide-up mb-4 h-4 w-full rounded-full bg-accent hover:bg-text lg:mb-9 lg:h-9 ${
        className ?? ""
      }`}
    />
  );
};

export default Stripes;
