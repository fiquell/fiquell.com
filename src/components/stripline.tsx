interface StriplineProps {
  className?: string | undefined;
}

const Stripline = ({ className }: StriplineProps) => {
  return (
    <div
      className={`mb-4 h-4 w-full rounded-full bg-accent transition duration-300 ease-in-out hover:bg-text lg:mb-9 lg:h-9 ${className}`}
    />
  );
};

export default Stripline;
