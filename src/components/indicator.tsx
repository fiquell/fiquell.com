const Indicator = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-2 left-2 z-50 font-mono text-xs">
      <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-secondary-content">
        <p className="block sm:hidden">xs</p>
        <p className="hidden sm:max-md:block">sm</p>
        <p className="hidden md:max-lg:block">md</p>
        <p className="hidden lg:max-xl:block">lg</p>
        <p className="hidden xl:max-2xl:block">xl</p>
        <p className="hidden 2xl:block">2xl</p>
      </div>
    </div>
  );
};

export default Indicator;
