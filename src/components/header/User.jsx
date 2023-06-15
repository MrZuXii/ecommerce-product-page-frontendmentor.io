import { useState } from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";

User.propTypes = {
  orderProduct: PropTypes.object,
  onDeleteProduct: PropTypes.func,
};

export default function User({ orderProduct, onDeleteProduct }) {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart((show) => !show);
  }
  return (
    <>
      <Cart
        showCart={showCart}
        orderProduct={orderProduct}
        onDeleteProduct={onDeleteProduct}
        onShowCart={handleShowCart}
      />
      <div className="user">
        <div className="user__basket" onClick={handleShowCart}>
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-cart"></use>
          </svg>
          {orderProduct?.quantity ? (
            <div className="user__num">{orderProduct?.quantity}</div>
          ) : (
            ""
          )}
        </div>

        <img
          className="user__avatar"
          height={100}
          width={100}
          src="./images/image-avatar.png"
          alt="avatar"
        ></img>
      </div>
    </>
  );
}
