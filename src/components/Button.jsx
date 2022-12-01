const Button = ({ variant = "primary", action, children }) => {
  return (
    <button
      className={`${variant}`}
      onClick={() => action()}
    >
      {children}
    </button>
  );
};

export default Button;
