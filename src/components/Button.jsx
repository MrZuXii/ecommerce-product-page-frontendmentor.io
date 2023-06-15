import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
