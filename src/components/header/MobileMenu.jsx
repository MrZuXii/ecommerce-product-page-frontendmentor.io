import PropTypes from "prop-types";

MobileMenu.propTypes = {
  onOpenMobileMenu: PropTypes.func,
};

export default function MobileMenu({ onOpenMobileMenu }) {
  return (
    <button className="mobile-menu" onClick={onOpenMobileMenu}>
      <svg>
        <use xlinkHref="./images/sprite.svg#icon-menu" className="open"></use>
        <use xlinkHref="./images/sprite.svg#icon-close" className="close"></use>
      </svg>
    </button>
  );
}
