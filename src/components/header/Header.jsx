import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.node,
  openMobileMenu: PropTypes.bool,
};

export default function Header({ children, openMobileMenu }) {
  return (
    <header className={`header ${openMobileMenu ? "nav-open" : ""} `}>
      {children}
    </header>
  );
}
