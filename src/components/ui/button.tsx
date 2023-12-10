const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={`c-button ${className ?? ""}`}>
      <span className="c-button__inner">
        {Array.from({ length: 2 }, (_, index) => (
          <span key={index} className="c-button__inner--content">
            {children}
          </span>
        ))}
      </span>
    </button>
  );
};

export default Button;
