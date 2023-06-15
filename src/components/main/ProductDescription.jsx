import Button from "../Button";
import PropTypes from "prop-types";

ProductDescription.propTypes = {
  onAddToCart: PropTypes.func,
  product: PropTypes.object,
  quantity: PropTypes.number,
  onChangeQuantity: PropTypes.func,
};

export default function ProductDescription({
  onAddToCart,
  product,
  quantity,
  onChangeQuantity,
}) {
  const { name, company, description, price, discount } = product;

  return (
    <div className="product">
      <h3 className="product__subtitle">{company}</h3>
      <h2 className="product__title">{name}</h2>
      <p className="product__paragraph">{description}</p>
      <div className="product__prices">
        <div className="product__price">
          <div className="product__current">
            ${((price * discount) / 100).toFixed(2)}
          </div>
          <div className="product__discount">{discount}%</div>
        </div>
        <div className="product__old-price">${price.toFixed(2)}</div>
      </div>

      <div className="product__box">
        <div className="product__quantity">
          <button onClick={() => onChangeQuantity(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="12"
              height="4"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => onChangeQuantity(+e.target.value, true)}
          />
          <button onClick={() => onChangeQuantity(1)}>
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-plus"></use>
            </svg>
          </button>
        </div>
        <Button onClick={onAddToCart}>
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-cart"></use>
          </svg>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
