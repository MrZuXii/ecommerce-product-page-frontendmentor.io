import Button from "./../Button";
import Product from "./Product";
import PropTypes from "prop-types";

Cart.propTypes = {
  showCart: PropTypes.bool,
  orderProduct: PropTypes.object,
  onDeleteProduct: PropTypes.func,
  onShowCart: PropTypes.func,
};

export default function Cart({
  showCart,
  orderProduct,
  onDeleteProduct,
  onShowCart,
}) {
  return (
    <>
      {showCart && (
        <div className="cart">
          <div className="cart__heading">Cart</div>
          {orderProduct ? (
            <div className="cart__content">
              <Product
                orderProduct={orderProduct}
                onDeleteProduct={onDeleteProduct}
              />
              <Button
                onClick={() => {
                  onDeleteProduct();
                  onShowCart();
                }}
              >
                Checkout
              </Button>
            </div>
          ) : (
            <div className="cart__empty">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
