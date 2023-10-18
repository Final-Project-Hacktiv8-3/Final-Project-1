import PropTypes from "prop-types";
const Button = ({
  children,
  className,
  size = "h-10 w-28",
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:contrast-150 transition-all ${className} ${size}`}
      type={type}
      onClick={onClick}
    >
      {children}

    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
