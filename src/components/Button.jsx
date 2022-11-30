import { useDispatch } from "react-redux";

const Button = ({ variant = "primary", action, children }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`${variant}`}
      onClick={() => dispatch(action())}
    >
      {children}
    </button>
  );
};

export default Button;
