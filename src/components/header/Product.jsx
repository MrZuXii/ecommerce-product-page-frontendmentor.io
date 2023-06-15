import PropTypes from "prop-types";

Product.propTypes = {
  orderProduct: PropTypes.object,
  onDeleteProduct: PropTypes.func,
};

export default function Product({ orderProduct, onDeleteProduct }) {
  const { discount, quantity, images, name, price } = orderProduct;
  const priceAfterDiscount = ((price * discount) / 100).toFixed(2);
  const totalPrice = (priceAfterDiscount * quantity).toFixed(2);
  return (
    <div className="cart__product">
      <img
        className="cart__img"
        src={`./images/${images[0]}`}
        alt="image of product"
      />
      <h4 className="cart__name">{name}</h4>
      <button className="cart__delete" onClick={onDeleteProduct}>
        <svg>
          <use xlinkHref="./images/sprite.svg#icon-delete"></use>
        </svg>
      </button>
      <div className="cart__box">
        <div className="cart__price">
          ${priceAfterDiscount} x {quantity}
        </div>
        <div className="cart__totalprice">${totalPrice}</div>
      </div>
    </div>
  );
}
