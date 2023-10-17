import PropTypes from "prop-types";
export const NavDropDown = ({ children, className, isDropDown }) => {
  NavDropDown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isDropDown: PropTypes.bool,
  };
  return (
    <div
      className={`${className} absolute text-md p-4 z-50 bg-white shadow-md dark:bg-zinc-900 ${
        isDropDown ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
