import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default function Modal({ children, open }) {
  return open && <div className="modal">{children}</div>;
}
